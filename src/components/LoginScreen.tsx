import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpenIcon } from './icons';
import { signup, login } from '../services/auth';

interface LoginScreenProps {
  setCurrentUser: (user: any) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ setCurrentUser }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      if (activeTab === 'login') {
        const user = await login(email, password); // login should return user object
        setCurrentUser(user); // <-- set user in parent
        navigate('/Dashboard');
      } else {
        await signup(name, email, password);
        setSuccess('Account created successfully! You can now log in.');
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
      console.error('Login/Signup error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center items-center gap-3 mb-8">
            <BookOpenIcon className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-text-primary tracking-tight">
                Deutsch<span className="text-primary">Path</span>
            </h1>
        </div>
        <div className="bg-base-100 rounded-2xl shadow-xl p-8">
            <div className="flex border-b border-base-300 mb-6">
                <button 
                    onClick={() => { setActiveTab('login'); setError(null); setSuccess(null); }}
                    className={`flex-1 py-3 font-semibold text-center transition-colors ${activeTab === 'login' ? 'text-primary border-b-2 border-primary' : 'text-text-secondary hover:text-text-primary'}`}
                >
                    Login
                </button>
                <button 
                    onClick={() => { setActiveTab('signup'); setError(null); setSuccess(null); }}
                    className={`flex-1 py-3 font-semibold text-center transition-colors ${activeTab === 'signup' ? 'text-primary border-b-2 border-primary' : 'text-text-secondary hover:text-text-primary'}`}
                >
                    Sign Up
                </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                {activeTab === 'signup' && (
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Name</label>
                        <input 
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 bg-base-200 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                )}
                 <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Email</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 bg-base-200 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">Password</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 bg-base-200 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                {error && <p className="text-sm text-red-600 bg-red-100 p-3 rounded-lg">{error}</p>}
                {success && <p className="text-sm text-green-700 bg-green-100 p-3 rounded-lg">{success}</p>}
                <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
                >
                    {activeTab === 'login' ? 'Login' : 'Create Account'}
                </button>
            </form>
             <div className="text-center mt-4">
                <p className="text-xs text-text-secondary">
                    For demo, try: <br />
                    <span className="font-mono">alex.meier@example.com</span> / <span className="font-mono">password123</span>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;