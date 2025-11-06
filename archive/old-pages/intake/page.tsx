'use client';
import React, { useState } from 'react';
import { LabeledSelect, SelectOption } from '@/components/ui/LabeledSelect';
import { GoalsField, GoalsFieldValue } from '@/components/intake/GoalsField';

type SubmitResult = { outcome: 'BOOK' | 'REVIEW' | 'NURTURE'; appointmentUrl?: string };

const verticalOptions: SelectOption[] = [
  { value: 'pro_team', label: 'Pro team or club' },
  { value: 'college_athletics', label: 'College / university athletics' },
  { value: 'league_association', label: 'League or association' },
  { value: 'event_operator', label: 'Event operator or venue' },
  { value: 'brand_sponsor', label: 'Brand / sponsor' },
  { value: 'retail_merch', label: 'Retail or merch partner' },
  { value: 'agency_integrator', label: 'Agency or systems integrator' },
  { value: 'community_club', label: 'Community or local club' },
  { value: 'youth_academy', label: 'Youth or academy program' },
  { value: 'esports_digital', label: 'Esports or digital community' },
  { value: 'nonprofit_foundation', label: 'Nonprofit / foundation' },
  { value: 'other', label: 'Other' },
];

const roleOptions: SelectOption[] = [
  { value: 'Marketing/Partnerships', label: 'Marketing / Partnerships' },
  { value: 'Ops', label: 'Operations' },
  { value: 'Team Exec', label: 'Team Executive' },
  { value: 'University Admin', label: 'University Admin' },
  { value: 'Other', label: 'Other' },
];

const audienceOptions: SelectOption[] = [
  { value: '<10k', label: '< 10k' },
  { value: '10–50k', label: '10–50k' },
  { value: '50–250k', label: '50–250k' },
  { value: '250k–1M', label: '250k–1M' },
  { value: '>1M', label: '> 1M' },
];

const moqOptions: SelectOption[] = [
  { value: '<5k', label: '< 5,000' },
  { value: '5k–20k', label: '5,000–20,000' },
  { value: '20k–100k', label: '20,000–100,000' },
  { value: '100k+', label: '100,000+' },
];

const timelineOptions: SelectOption[] = [
  { value: 'ASAP', label: 'ASAP (0–2 months)' },
  { value: 'This season', label: 'This season (3–6 months)' },
  { value: 'Exploring', label: 'Exploring (6–12 months)' },
];

const decisionOptions: SelectOption[] = [
  { value: 'Decision Maker', label: 'I\'m the decision maker' },
  { value: 'Team', label: 'Part of a decision team' },
  { value: 'Exploring', label: 'Exploring for someone else' },
];

export default function IntakePage() {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Controlled state so placeholders show until a choice is made
  const [vertical, setVertical] = useState('');
  const [role, setRole] = useState('');
  const [audienceBand, setAudienceBand] = useState('');
  const [moqBand, setMoqBand] = useState('');
  const [timeline, setTimeline] = useState('');
  const [decisionRole, setDecisionRole] = useState('');
  const [goals, setGoals] = useState<GoalsFieldValue>([]);
  const [otherGoal, setOtherGoal] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    // Ensure selects are included in payload
    form.set('vertical', vertical);
    form.set('role', role);
    form.set('audienceBand', audienceBand);
    form.set('moqBand', moqBand);
    form.set('timeline', timeline);
    form.set('decisionRole', decisionRole);

    const payload: Record<string, any> = Object.fromEntries(form.entries());
    payload.goals = goals;
    payload.goals_other = otherGoal;

    console.log('Submitting payload:', payload);
    
    try {
      const res = await fetch('/api/intake/submit', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload) 
      });
      
      console.log('Response status:', res.status);
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error('API Error Response:', errorText);
        throw new Error(`HTTP ${res.status}: ${errorText}`);
      }
      
      const json = await res.json();
      console.log('Response data:', json);
      
      if (json.error) {
        throw new Error(`API Error: ${json.error}`);
      }
      
      setResult(json);
    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(`Submission failed: ${errorMessage}`);
    } finally {
      setSubmitting(false);
    }
  }

  if (result?.outcome === 'BOOK') return <BookedStep appointmentUrl={result.appointmentUrl!} />;
  if (result?.outcome === 'REVIEW') return <ReviewStep />;
  if (result?.outcome === 'NURTURE') return <NurtureStep />;

  return React.createElement('form', {
    onSubmit: onSubmit,
    className: 'max-w-2xl mx-auto space-y-6 p-6'
  },
    React.createElement('h1', { className: 'text-3xl font-semibold text-gray-900' }, 'Let\'s make belonging last.'),
    React.createElement('p', { className: 'text-gray-600' }, 'Tell us about your fans. We\'ll shape the best next step.'),
    
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'name', className: 'block text-gray-700 mb-1 font-medium' }, 'Full name *'),
          React.createElement('input', { id: 'name', name: 'name', placeholder: 'Jane Smith', required: true, className: 'input' })
        ),
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'email', className: 'block text-gray-700 mb-1 font-medium' }, 'Work email *'),
          React.createElement('input', { id: 'email', name: 'email', type: 'email', placeholder: 'jane@team.com', required: true, className: 'input' })
        ),
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'org', className: 'block text-gray-700 mb-1 font-medium' }, 'Organization'),
          React.createElement('input', { id: 'org', name: 'org', placeholder: 'Club / Team / University', className: 'input' })
        ),
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'website', className: 'block text-gray-700 mb-1 font-medium' }, 'Website'),
          React.createElement('input', { id: 'website', name: 'website', placeholder: 'https://…', className: 'input' })
        ),
      React.createElement(LabeledSelect, {
        id: 'vertical',
        name: 'vertical',
        label: 'Type of Organization',
        placeholder: 'Select one…',
        options: verticalOptions,
        value: vertical,
        onChange: setVertical,
        required: true,
        helperText: 'Pick the closest fit - we\'ll tailor next steps.'
      }),
      React.createElement(LabeledSelect, {
        id: 'role',
        name: 'role',
        label: 'Your Role',
        placeholder: 'Select one…',
        options: roleOptions,
        value: role,
        onChange: setRole,
        required: true
      }),
      React.createElement(LabeledSelect, {
        id: 'audienceBand',
        name: 'audienceBand',
        label: 'Audience Size',
        placeholder: 'Select one…',
        options: audienceOptions,
        value: audienceBand,
        onChange: setAudienceBand,
        required: true
      }),
      React.createElement(LabeledSelect, {
        id: 'moqBand',
        name: 'moqBand',
        label: 'Typical Order Size',
        placeholder: 'Select one…',
        options: moqOptions,
        value: moqBand,
        onChange: setMoqBand,
        required: true
      }),
      React.createElement(LabeledSelect, {
        id: 'timeline',
        name: 'timeline',
        label: 'Timeline',
        placeholder: 'Select one…',
        options: timelineOptions,
        value: timeline,
        onChange: setTimeline,
        required: true
      }),
      React.createElement(LabeledSelect, {
        id: 'decisionRole',
        name: 'decisionRole',
        label: 'Decision Process',
        placeholder: 'Select one…',
        options: decisionOptions,
        value: decisionRole,
        onChange: setDecisionRole,
        required: true
      })
    ),
    
    React.createElement(GoalsField, {
      value: goals,
      onChange: setGoals,
      otherText: otherGoal,
      onOtherTextChange: setOtherGoal
    }),
    
    error ? React.createElement('div', {
      className: 'bg-red-50 border border-red-200 rounded-lg p-4'
    },
      React.createElement('div', { className: 'flex items-start gap-3' },
        React.createElement('svg', { className: 'w-5 h-5 text-red-500 mt-0.5 flex-shrink-0', fill: 'currentColor', viewBox: '0 0 20 20' },
          React.createElement('path', { fillRule: 'evenodd', d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z', clipRule: 'evenodd' })
        ),
        React.createElement('div', null,
          React.createElement('h3', { className: 'font-semibold text-red-900' }, 'Submission Error'),
          React.createElement('p', { className: 'text-red-700 text-sm mt-1' }, error)
        )
      )
    ) : null,
    React.createElement('div', { className: 'flex justify-center' },
      React.createElement('button', {
        disabled: submitting,
        className: 'inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-[#F5856E] text-white hover:brightness-110 transition'
      }, submitting ? 'Submitting…' : 'Submit')
    )
  );
}

function BookedStep({ appointmentUrl }: { appointmentUrl: string }) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-xl mx-auto p-8 space-y-8 text-center bg-white rounded-xl shadow-lg">
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-gray-900">Perfect match!</h2>
          <p className="text-gray-600 text-lg">We'd love to learn more about your community and show you how Vonga can help create lasting connections.</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">What to expect:</h3>
          <ul className="text-left space-y-2 text-gray-600">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>30-minute conversation about your community's needs</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Custom recommendations for your organization</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No pressure - just helpful insights</span>
            </li>
          </ul>
        </div>

        <a 
          href={appointmentUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold bg-[#F5856E] text-white hover:brightness-110 transition shadow-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Choose Your Time
        </a>
        
        <p className="text-sm text-gray-500">
          Opens in a new tab • Takes about 2 minutes to book
        </p>
      </div>
    </div>
  );
}
function ReviewStep() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-xl mx-auto p-8 space-y-8 text-center bg-white rounded-xl shadow-lg">
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-gray-900">Thanks - we're reviewing!</h2>
          <p className="text-gray-600 text-lg">We're excited to learn more about your community and see how Vonga can help create lasting connections.</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">What happens next:</h3>
          <ul className="text-left space-y-2 text-gray-600">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Team review within one business day</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Next steps and scheduling options</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No pressure - we're here when you're ready</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="text-left">
              <h4 className="font-semibold text-blue-900">Questions in the meantime?</h4>
              <p className="text-blue-700 text-sm mt-1">Feel free to reach out to us directly if you have any questions about Vonga or connected apparel.</p>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-500">
          We'll be in touch soon • Usually within 24 hours
        </p>
      </div>
    </div>
  );
}
function NurtureStep() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-xl mx-auto p-8 space-y-8 text-center bg-white rounded-xl shadow-lg">
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-gray-900">Thanks - we'll send ideas you can use!</h2>
          <p className="text-gray-600 text-lg">We'll share examples and playbooks to help you build stronger community connections.</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">What you'll receive:</h3>
          <ul className="text-left space-y-2 text-gray-600">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Community engagement playbooks and best practices</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Real examples of connected apparel in action</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Updates when the timing's right for your community</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="text-left">
              <h4 className="font-semibold text-green-900">Ready to explore sooner?</h4>
              <p className="text-green-700 text-sm mt-1">When you're ready to dive deeper, we'll be here to help you create lasting connections.</p>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-500">
          Check your email for resources • We'll stay in touch
        </p>
      </div>
    </div>
  );
}