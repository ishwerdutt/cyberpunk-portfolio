'use client';

import { useState } from 'react';

export default function ContactTerminal() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([
    '> System initialized...',
    '> Type "help" for available commands'
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newOutput = [...output, `> ${command}`];
    
    const cmd = command.toLowerCase().trim();
    
    if (cmd === 'help') {
      newOutput.push('Available commands:');
      newOutput.push('  email    - Display email address');
      newOutput.push('  github   - Open GitHub profile');
      newOutput.push('  linkedin - Open LinkedIn profile');
      newOutput.push('  twitter  - Open Twitter profile');
      newOutput.push('  clear    - Clear terminal');
    } else if (cmd === 'email') {
      newOutput.push('Email: irishwerr@gmail.com');
      newOutput.push('Connection established.');
    } else if (cmd === 'github') {
      newOutput.push('Opening GitHub profile...');
      newOutput.push('https://github.com/irishwerr');
    } else if (cmd === 'linkedin') {
      newOutput.push('Opening LinkedIn profile...');
      newOutput.push('https://linkedin.com/in/ishwer-dutt');
    } else if (cmd === 'twitter') {
      newOutput.push('Opening Twitter profile...');
      newOutput.push('https://twitter.com/ishwerdutt');
    } else if (cmd === 'clear') {
      setOutput([]);
      setCommand('');
      return;
    } else if (cmd === '') {
      // Do nothing for empty command
    } else {
      newOutput.push(`Command not found: ${cmd}`);
      newOutput.push('Type "help" for available commands');
    }
    
    setOutput(newOutput);
    setCommand('');
  };

  return (
    <section className="h-screen flex items-center justify-center py-24 px-6 relative z-10 border-t border-green-500/20 snap-start">
      {/* Data Flow & Gradient Descent Visualization */}
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute top-20 left-20 text-green-500 font-mono text-base">
          <div className="mb-4 font-bold text-lg">Loss Convergence:</div>
          <div className="flex items-end gap-2">
            {[8, 7, 6, 5, 4, 3, 2, 1.5, 1.2, 1].map((h, i) => (
              <div key={i} className="w-5 bg-green-500/60" style={{ height: `${h * 10}px` }} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-20 right-20 text-cyan-400 font-mono text-base">
          <div className="mb-4 font-bold text-lg">Accuracy Metrics:</div>
          <div className="text-green-400 text-base">Training: 99.8%</div>
          <div className="text-cyan-400 text-base">Validation: 98.2%</div>
          <div className="text-purple-400 text-base">Test: 97.9%</div>
        </div>
        <div className="absolute top-1/3 right-1/4 text-purple-500 font-mono text-xl font-bold">
          θ_new = θ_old - α∇L(θ)
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-green-400 font-mono text-base">
          <div className="font-bold">Batch Size: 32</div>
          <div className="font-bold">Learning Rate: 0.001</div>
          <div className="font-bold">Epochs: 100</div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 font-['Orbitron'] text-center">
          <span className="chrome-text inline-block animate-[expandContract_3s_ease-in-out_infinite,glowIntensify_2s_ease-in-out_infinite]">&gt; CONNECT_</span>
        </h2>

        <div className="border border-green-500 bg-black/80 p-8 font-['Space_Mono'] text-sm holographic">
          {/* Terminal header */}
          <div className="flex items-center gap-2 pb-4 border-b border-green-500/30 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-green-400">ishwer@mainframe:~$</span>
          </div>

          {/* Terminal output */}
          <div className="space-y-2 mb-6 max-h-64 overflow-y-auto">
            {output.map((line, index) => (
              <div key={index} className="text-green-400">
                {line}
              </div>
            ))}
          </div>

          {/* Terminal input */}
          <form onSubmit={handleCommand} className="flex items-center gap-2">
            <span className="text-cyan-400">&gt;</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="flex-1 bg-transparent outline-none text-green-400 caret-cyan-400"
              placeholder="enter command..."
              autoFocus
            />
          </form>
        </div>

        {/* Quick contact buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <a
            href="mailto:irishwerr@gmail.com"
            className="p-6 border border-green-500/30 bg-black/60 hover:border-cyan-400 hover:bg-black/80 transition-all text-center group"
          >
            <div className="text-2xl mb-3">📧</div>
            <div className="text-green-400 text-sm group-hover:text-cyan-400">EMAIL</div>
          </a>
          
          <a
            href="https://github.com/irishwerr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-green-500/30 bg-black/60 hover:border-cyan-400 hover:bg-black/80 transition-all text-center group"
          >
            <div className="text-2xl mb-3">💻</div>
            <div className="text-green-400 text-sm group-hover:text-cyan-400">GITHUB</div>
          </a>
          
          <a
            href="https://linkedin.com/in/ishwer-dutt"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-green-500/30 bg-black/60 hover:border-cyan-400 hover:bg-black/80 transition-all text-center group"
          >
            <div className="text-2xl mb-3">💼</div>
            <div className="text-green-400 text-sm group-hover:text-cyan-400">LINKEDIN</div>
          </a>
          
          <a
            href="tel:+917832075416"
            className="p-6 border border-green-500/30 bg-black/60 hover:border-cyan-400 hover:bg-black/80 transition-all text-center group"
          >
            <div className="text-2xl mb-3">📱</div>
            <div className="text-green-400 text-sm group-hover:text-cyan-400">PHONE</div>
          </a>
        </div>
      </div>
    </section>
  );
}
