Next.js + firebaseのサンプルで２種類のauthの管理方法があった

userContext（contextAPI）を使う場合と、useUser（useEffect）を使う場合

userContext
```js
import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import firebase from '../firebase/clientApp';

export const UserContext = createContext(null);

export default function UserContextComp({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.

  useEffect(() => {
    // Listen authenticated user
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          // User is signed in.
          const { uid, displayName, email, photoURL } = user;
          // You could also look for the user doc in your Firestore (if you have one):
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser({ uid, displayName, email, photoURL });
        } else setUser(null);
      } catch (error) {
        // Most probably a connection error. Handle appropriately.
      } finally {
        setLoadingUser(false);
      }
    });

    // Unsubscribe auth listener on unmount
    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorhands the context!
export const useUser = () => useContext(UserContext);
```

useUser
```js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import firebase from '../../firebase/clientApp';
import {
  getUserFromCookie,
  setUserCookie,
  removeUserCookie,
} from './userCookies';
import { mapUserData } from './mapUserData';
import { UserData } from './userData';

// ユーザー情報取得, ログアウト処理
const useUser = (): {
  user: UserData | undefined;
  logout: () => Promise<void>;
} => {
  const [user, setUser] = useState<UserData | undefined>();
  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        router.push('/');
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date

    // Firebaseのid tokenが変更された際の処理
    // cookieにuserDataを追加,削除
    const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
      if (user) {
        const userData = mapUserData(user);
        setUserCookie(userData);
        setUser(userData);
      } else {
        removeUserCookie();
        setUser(null);
      }
    });

    // 未ログイン状態でも閲覧できるページのパスを以下に追加
    const existPaths = ['/', '/search', '/auth'];
    // 未ログイン状態で閲覧できるページ以外の場合、
    if (existPaths.includes(router.pathname) === false) {
      const userFromCookie: UserData = getUserFromCookie();
      // クッキーにUserDataがない場合はルートページにリダイレクトする
      if (!userFromCookie) {
        router.push('/');
        return;
      }
      // クッキーにUserDataがある場合はUserを更新
      setUser(userFromCookie);
    }

    return () => {
      cancelAuthListener();
    };
  }, []);

  return { user, logout };
};

export { useUser };
```

userContextはContextとして共通のUser情報を使い回す

useEffectを使う場合は、毎回Firebaseに問い合わせてユーザ情報を持ってくる

前者の場合は、随時メモ化などを行わないと再レンダリングで処理が遅くなるが、通信は一度だけで良い

後者の場合は、通信が発生するため若干遅くなる（Firebaseの通信は早いので微々たるもの）

また、GraphQLのApoloなどを使ってリクエストをキャッシュすることで通信を省略できる

