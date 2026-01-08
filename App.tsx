
import React, { useState, useEffect } from 'react';
import { PROJECTS, SKILLS, EXPERIENCES, BIO, EDUCATION } from './constants';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code2, Cpu, Cloud, BookOpen, Award, Layers, Zap, Clock, ChevronRight, Database, Palette, Moon, Sun } from 'lucide-react';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
  const [theme, setTheme] = useState<'cyber' | 'silver'>('cyber');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'cyber' ? 'silver' : 'cyber');
  };

  return (
    <div className="min-h-screen pb-40 transition-colors duration-500">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className={`absolute top-[10%] left-[10%] w-[50vw] h-[50vh] blur-[150px] rounded-full transition-all duration-1000 ${theme === 'cyber' ? 'bg-[#6366f1]/10' : 'bg-blue-400/10'}`}></div>
        <div className={`absolute bottom-[10%] right-[10%] w-[40vw] h-[40vh] blur-[120px] rounded-full transition-all duration-1000 ${theme === 'cyber' ? 'bg-[#bef264]/5' : 'bg-sky-400/5'}`}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass-slab rounded-full border-[var(--border)] flex items-center gap-8 md:gap-12 text-[10px] mono uppercase tracking-widest">
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-[var(--accent)] transition-colors text-[var(--text-primary)]">Index</a>
          <a href="#work" className="hover:text-[var(--accent)] transition-colors text-[var(--text-secondary)]">Experience</a>
          <a href="#blueprint" className="hover:text-[var(--accent)] transition-colors text-[var(--text-secondary)]">Stack</a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-px h-3 bg-[var(--text-tertiary)]"></div>
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all transform active:scale-95"
            title="Toggle Color Scheme"
          >
            {theme === 'cyber' ? <Sun size={14} /> : <Moon size={14} />}
            <span className="hidden sm:inline">{theme === 'cyber' ? 'SILVER' : 'CYBER'}</span>
          </button>
          <div className="w-px h-3 bg-[var(--text-tertiary)] hidden sm:block"></div>
          <div className="hidden sm:flex items-center gap-2 text-[var(--text-secondary)] opacity-50">
            <Clock size={10} />
            {time} NYC
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="home" className="max-w-7xl mx-auto px-6 pt-40 lg:pt-56">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[var(--accent)] mono text-xs uppercase tracking-[0.3em] glow-text">Engineering // Education</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-30"></div>
            </div>
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-12 uppercase text-[var(--text-primary)]">
              BUILDING <br /> THE <span className="text-[var(--accent)]">STACK</span> <br /> OF TOMORROW.
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-light mb-12">
              {BIO.summary}
            </p>
            <div className="flex flex-wrap gap-4">
               <a href={`mailto:${BIO.email}`} className="px-8 py-4 bg-[var(--accent)] text-[var(--void)] font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg flex items-center gap-3">
                 Start a Project <ChevronRight size={16} />
               </a>
               <div className="flex items-center gap-4 px-6">
                 <a href={`https://${BIO.linkedin}`} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"><Linkedin size={20} /></a>
                 <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"><Github size={20} /></a>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-slab p-6 rounded-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform"><Layers size={80} color="var(--accent)" /></div>
               <div className="text-[10px] mono text-[var(--text-secondary)] uppercase tracking-widest mb-4 opacity-60">Latest Experience</div>
               <div className="text-lg font-bold mb-1 text-[var(--text-primary)]">Code Next Manager</div>
               <div className="text-[var(--accent)] mono text-xs uppercase">@GOOGLE</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-slab p-6 rounded-2xl">
                 <div className="text-[10px] mono text-[var(--text-secondary)] uppercase tracking-widest mb-2 opacity-60">Cloud</div>
                 <div className="text-xl font-bold text-[var(--text-primary)]">AWS</div>
                 <div className="text-[9px] text-[var(--accent)] mono mt-1">SA CERTIFIED</div>
              </div>
              <div className="glass-slab p-6 rounded-2xl">
                 <div className="text-[10px] mono text-[var(--text-secondary)] uppercase tracking-widest mb-2 opacity-60">Location</div>
                 <div className="text-xl font-bold text-[var(--text-primary)]">NYC</div>
                 <div className="text-[9px] text-[var(--text-secondary)] mono mt-1">GMT-4</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bento Work Section */}
      <section id="work" className="max-w-7xl mx-auto px-6 mt-32">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-[var(--text-primary)]">Experience <span className="text-[var(--text-tertiary)]">Log</span></h2>
          <div className="h-[1px] flex-1 bg-[var(--border)]"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className={`glass-slab p-8 rounded-3xl group hover:border-[var(--accent)] transition-all ${i === 0 ? 'lg:col-span-2' : ''}`}>
              <div className="flex justify-between items-start mb-12">
                <div className="mono text-[10px] text-[var(--text-secondary)] uppercase tracking-[0.2em] opacity-40">{exp.period}</div>
                <div className="p-2 rounded-full border border-[var(--border)] text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">
                  <ExternalLink size={16} />
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold tracking-tight mb-2 text-[var(--text-primary)]">{exp.role}</h3>
                <div className="text-[var(--accent)] mono text-xs uppercase font-bold">{exp.company}</div>
              </div>
              <div className="space-y-4">
                {exp.description.slice(0, 3).map((d, idx) => (
                  <p key={idx} className="text-sm text-[var(--text-secondary)] font-light flex gap-3">
                    <span className="text-[var(--accent)]">•</span> {d}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Blueprint (Skills) */}
      <section id="blueprint" className="max-w-7xl mx-auto px-6 mt-32">
        <div className="glass-slab rounded-[3rem] p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-[var(--accent)]/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl font-black uppercase tracking-tighter mb-8 leading-none text-[var(--text-primary)]">THE <br />TECHNICAL <br /><span className="text-[var(--accent)]">BLUEPRINT.</span></h2>
              <p className="text-[var(--text-secondary)] mb-12 max-w-sm">A specialized focus on the intersection of pedagogy and high-scale engineering systems.</p>
              
              <div className="space-y-12">
                {[
                  { label: 'Cloud Architecture', icon: <Cloud size={20} />, sub: 'AWS Solutions Architect, K8s, Docker' },
                  { label: 'Language Engineering', icon: <Code2 size={20} />, sub: 'AST Analysis, ESQuery, TypeScript' },
                  { label: 'Backend Systems', icon: <Database size={20} />, sub: 'PostgreSQL, Node.js, Python/Django' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 glass-slab rounded-xl flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1 text-[var(--text-primary)]">{item.label}</div>
                      <div className="mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest opacity-60">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {SKILLS.map((skill, i) => (
                <div key={i} className="glass-slab p-6 rounded-2xl flex flex-col justify-between">
                   <div className="text-[10px] mono text-[var(--text-secondary)] uppercase tracking-widest opacity-40">{skill.category}</div>
                   <div>
                     <div className="text-xl font-bold mb-2 text-[var(--text-primary)]">{skill.name}</div>
                     <div className="h-1 w-full bg-[var(--text-tertiary)] rounded-full overflow-hidden">
                       <div className="h-full bg-[var(--accent)]" style={{ width: `${skill.level}%` }}></div>
                     </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="flex items-center gap-6 mb-16">
          <div className="h-[1px] flex-1 bg-[var(--border)]"></div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-right text-[var(--text-primary)]">Selected <span className="text-[var(--text-tertiary)]">Works</span></h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((proj, i) => (
            <div key={i} className="group relative aspect-[16/10] glass-slab rounded-[2.5rem] overflow-hidden">
              <img src={proj.image} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" />
              <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'cyber' ? 'from-black via-black/40' : 'from-slate-100 via-slate-100/40'} to-transparent`}></div>
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <div className="flex gap-3 mb-6">
                  {proj.tags.map(t => (
                    <span key={t} className="mono text-[9px] px-2 py-1 glass-slab border-[var(--border)] rounded-full text-[var(--text-secondary)] uppercase tracking-widest">{t}</span>
                  ))}
                </div>
                <h3 className="text-4xl font-bold tracking-tighter mb-4 text-[var(--text-primary)] uppercase">{proj.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm max-w-md line-clamp-2 mb-8">{proj.description}</p>
                <a href="#" className="inline-flex items-center gap-2 mono text-xs text-[var(--accent)] uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
                  Access Repository <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Bento */}
      <section className="max-w-7xl mx-auto px-6 mt-32 grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2 glass-slab p-12 rounded-[2.5rem]">
           <Award className="text-[var(--accent)] mb-8" size={32} />
           <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter text-[var(--text-primary)]">Certifications</h3>
           <div className="space-y-3">
             <div className="flex justify-between items-center py-2 border-b border-[var(--border)] text-sm">
               <span className="text-[var(--text-secondary)]">AWS Solutions Architect</span>
               <span className="mono text-[10px] text-[var(--accent)] uppercase">ASSOCIATE</span>
             </div>
             <div className="flex justify-between items-center py-2 border-b border-[var(--border)] text-sm">
               <span className="text-[var(--text-secondary)]">AWS AI Practitioner</span>
               <span className="mono text-[10px] text-[var(--accent)] uppercase">CERTIFIED</span>
             </div>
             <div className="flex justify-between items-center py-2 border-b border-[var(--border)] text-sm">
               <span className="text-[var(--text-secondary)]">General Assembly</span>
               <span className="mono text-[10px] text-[var(--text-tertiary)] uppercase">SWE CERT</span>
             </div>
           </div>
        </div>
        <div className="lg:col-span-2 glass-slab p-12 rounded-[2.5rem] relative overflow-hidden">
           <BookOpen className="text-[var(--accent)] mb-8" size={32} />
           <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter text-[var(--text-primary)]">Education</h3>
           <div className="text-xl font-bold mb-1 text-[var(--text-primary)]">B.Tech, Electrical Engineering</div>
           <div className="text-[var(--text-secondary)] text-sm mb-6">NYC College of Technology</div>
           <div className="absolute -bottom-8 -right-8 opacity-5 text-[var(--accent)]">
             <Layers size={200} />
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-60 pb-40 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Zap className="text-[var(--accent)] mx-auto mb-8 animate-pulse" />
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 uppercase text-[var(--text-primary)]">Let's Build.</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-20 text-[var(--text-primary)]">
            <a href={`mailto:${BIO.email}`} className="text-lg font-bold hover:text-[var(--accent)] transition-colors uppercase tracking-widest">EMAIL</a>
            <a href={`https://${BIO.linkedin}`} className="text-lg font-bold hover:text-[var(--accent)] transition-colors uppercase tracking-widest">LINKEDIN</a>
            <a href="#" className="text-lg font-bold hover:text-[var(--accent)] transition-colors uppercase tracking-widest">GITHUB</a>
          </div>
          <div className="mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-[1em]">
            © {new Date().getFullYear()} Prince Miller // {theme === 'cyber' ? 'CORE_v2.0' : 'PLATINUM_v1.0'}
          </div>
        </div>
      </footer>

      {/* AI Assistant - Command Palette Style */}
      <AIChatBot />
    </div>
  );
};

export default App;
