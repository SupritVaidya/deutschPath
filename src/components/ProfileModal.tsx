import React, { useState, useEffect } from 'react';
import { User } from '../../types';
import { XIcon } from './icons';

interface ProfileModalProps {
  user: User;
  usersDb: Record<string, User>;
  onClose: () => void;
  onSave: (userId: string, newName: string, newEmail: string) => { success: boolean, error?: string };
}

const ProfileModal: React.FC<ProfileModalProps> = ({ user, usersDb, onClose, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState<string | null>(null);

  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim()) {
      setError('Name and email cannot be empty.');
      return;
    }
    const result = onSave(user.id, name, email);
    if (!result.success) {
      setError(result.error || 'Failed to save profile.');
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-base-100 rounded-2xl shadow-xl w-full max-w-md" role="document">
        <div className="p-6 border-b border-base-300 flex justify-between items-center">
          <h2 id="modal-title" className="text-xl font-bold text-text-primary">Edit Profile</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-base-200 transition-colors"
            aria-label="Close modal"
          >
            <XIcon className="h-6 w-6 text-text-secondary" />
          </button>
        </div>
        <form onSubmit={handleSaveChanges}>
          <div className="p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full px-4 py-2 bg-base-200 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 bg-base-200 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {error && <p className="text-sm text-red-600 bg-red-100 p-3 rounded-lg">{error}</p>}
          </div>
          <div className="p-6 bg-base-200/60 rounded-b-2xl flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-base-300 text-text-primary font-semibold rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
