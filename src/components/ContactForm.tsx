import { GradientText } from 'astro-boilerplate-components';
import type { FC, FormEvent } from 'react';
import { useState } from 'react';

interface ContactFormProps {
  redirectUrl?: string;
}

// interface FormData = {
//   name: string;
//   email: string;
//   message: string;
// };

const ContactForm: FC<ContactFormProps> = ({ redirectUrl = '/success' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [err, setErr] = useState('');

  // const [formData, setFormData] = useState<FormData>({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErr('');

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const response = await fetch('https://formsubmit.co/el/kiyiwe', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        window.location.href = redirectUrl;
      } else {
        throw new Error('Failed to send message');
      }
    } catch (er) {
      setErr('Failed to send message. Please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
      <h2 className="text-center text-3xl font-bold">
        Let's Build You <br />
        <GradientText>an Awesome Web-Site !</GradientText>
      </h2>
      <input type="hidden" name="_next" value={redirectUrl} />
      <input type="hidden" name="_captcha" value="false" />
      {/* <input type="hidden" name="_next" value={redirectUrl} />
    <input type="hidden" name="_captcha" value="false" /> */}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-500"
        >
          Name (required)
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-500"
        >
          Phone (required)
        </label>
        <input
          type="phone"
          id="phone"
          name="phone"
          required
          className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm"
          placeholder="(123) 456-7890"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-500 "
        >
          Email (required)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-500"
        >
          Message (required)
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm"
        ></textarea>
      </div>
      {err && <p className="text-sm text-red-600">{err}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Sending' : 'Send Message'}
      </button>
    </form>
  );
  // </FormData>
};

export { ContactForm };
