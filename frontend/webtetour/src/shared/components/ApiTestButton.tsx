'use client';

import { useState } from 'react';
import { axiosClient } from '../services/api/axios';
import type { RegisterRequest } from '../types/auth.types';

export default function ApiTestButton() {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<string>('');

  const testConnection = async () => {
    setTesting(true);
    setResult('Testing...');

    try {
      console.log('API Base URL:', axiosClient.defaults.baseURL);

      // Test with a simple register request
      const timestamp = Date.now();
      const testData: RegisterRequest = {
        username: `test_${timestamp}`,
        password: 'Test123456',
        firstName: 'Test',
        lastName: 'User',
        email: `test_${timestamp}@example.com`,
        phoneNumber: '0123456789',
        address: '123 Sample Street, Hanoi',
        dateOfBirth: '1990-01-01',
        gender: true,
        isActive: true,
      };

      console.log('Sending test request:', testData);

      const response = await axiosClient.post('/auth/register', testData);

      console.log('Response:', response.data);
      setResult(`✅ Success! ${JSON.stringify(response.data)}`);
    } catch (error: any) {
      console.error('Test failed:', error);

      if (!error.response) {
        setResult('❌ Network Error: Cannot connect to API. Check if server is running or CORS is configured.');
      } else if (error.response.status === 401) {
        setResult('❌ CORS Error: Server returned 401 for OPTIONS request. Backend needs to configure CORS.');
      } else {
        setResult(`❌ Error ${error.response.status}: ${JSON.stringify(error.response.data)}`);
      }
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className='fixed bottom-4 left-4 z-50'>
      <button
        onClick={testConnection}
        disabled={testing}
        className='rounded-lg bg-purple-600 px-4 py-2 text-sm text-white shadow-lg hover:bg-purple-700 disabled:opacity-50'>
        {testing ? 'Testing API...' : 'Test API Connection'}
      </button>

      {result && (
        <div className='mt-2 max-w-md rounded-lg bg-white p-4 shadow-xl'>
          <p className='font-mono text-xs break-words'>{result}</p>
          <button onClick={() => setResult('')} className='mt-2 text-xs text-gray-500 hover:text-gray-700'>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
