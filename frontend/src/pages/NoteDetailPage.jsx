import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import axiosInstance from '../lib/axios';
import { ArrowLeftIcon, Trash2Icon } from 'lucide-react';

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axiosInstance.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.error('Error fetching note:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {};
  const handleSave = async () => {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="btn btn-ghost">
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Notes
          </Link>
          <button className="btn btn-error btn-outline">
            <Trash2Icon className="h-5 w-5" />
            Delete Note
          </button>
        </div>
        <div className="card bg-base-100">
          <div className="card-body">
            <div className="form-control mb-4 flex flex-col">
              {/* <label className="label">
                <span className="label-text">Title</span>
              </label> */}
              <input
                type="text"
                placeholder="Note Title"
                className="input input-bordered"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
              />
            </div>
            <div className="form-control mb-4 flex flex-col">
              {/* <label className="label">
                <span className="label-text">Content</span>
              </label> */}
              <textarea
                placeholder="Note Content"
                className="textarea textarea-bordered h-32"
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
              />
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={handleSave}
                disabled={saving}
                className="btn btn-primary"
              >
                {saving ? 'Saving...' : 'Save Note'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
