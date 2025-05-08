import { useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from '../firebase';

function Auth({ user, setUser }) {
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      {user ? (
        <div className="user-info">
          <img src={user.photoURL} alt="User" className="user-avatar" />
          <button onClick={handleSignOut} className="sign-out-btn">Sign Out</button>
        </div>
      ) : (
        <button onClick={handleSignIn} className="sign-in-btn">Sign In with Google</button>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Auth;













