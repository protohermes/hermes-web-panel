import Chat from '@/components/Chat';
import { useState } from 'react';

export default function Home() {
  const [employee, setEmployee] = useState<'executive-assistant' | 'devops-engineer'>('executive-assistant');
  const [apiBase, setApiBase] = useState('');

  // Map employee to API base URL from env vars
  const employeeOptions = [
    { label: 'Executive Assistant', value: 'executive-assistant' as const },
    { label: 'DevOps Engineer', value: 'devops-engineer' as const },
  ] as const;

  // Determine API base based on selection and env
  // We'll compute apiBase on change
  // For simplicity, we set apiBase in useEffect
  // Note: In production, you might want to store these in a config file or backend

  useEffect(() => {
    switch (employee) {
      case 'executive-assistant':
        setApiBase(process.env.NEXT_PUBLIC_API_BASE_EXEC_ASSISTANT || '');
        break;
      case 'devops-engineer':
        setApiBase(process.env.NEXT_PUBLIC_API_BASE_DEVOPSENGINEER || '');
        break;
    }
  }, [employee]);

  if (!apiBase) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-2xl font-bold mb-6">Hermes Employee Chat</h1>
        <p className="text-red-500 mb-4">
          Please configure the API base URL for the selected employee in Vercel Environment Variables.
        </p>
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            NEXT_PUBLIC_API_BASE_EXEC_ASSISTANT
          </label>
          <label className="block text-sm font-medium">
            NEXT_PUBLIC_API_BASE_DEVOPSENGINEER
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold">Hermes Employee Chat</h1>
        <p className="text-sm text-gray-500">
          Select an employee to chat with:
        </p>
      </header>
      <main className="flex-1 flex flex-col items-center p-4">
        <div className="w-full max-w-md space-y-4">
          <div className="flex items-center space-x-3">
            <label className="text-sm font-medium">Employee:</label>
            <select
              value={employee}
              onChange={(e) => setEmployee(e.target.value as any)}
              className="border rounded px-3 py-2"
            >
              {employeeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <Chat employeeName={employee} apiBase={apiBase} />
        </div>
      </main>
    </div>
  );
}