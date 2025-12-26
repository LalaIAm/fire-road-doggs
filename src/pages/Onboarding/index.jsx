import React from "react";

const Onboarding = () => {
  return (
    <div className="text-ink antialiased" id="onboarding">
      <div className="noise-layer"></div>
      <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 relative overflow-hidden">
        <header className="w-full max-w-3xl flex justify-between items-center mb-8 relative z-20">
          <div className="flex items-center gap-2">
            <i className="ph-fill ph-dog text-2xl text-rust"></i>
            <span className="font-serif font-bold text-xl tracking-tight">
              RoadDoggs
            </span>
          </div>
          <button className="font-mono text-xs uppercase text-gray-5-- hover:text-ink transition-colors border-b border-transparent hover:border-gray-500">
            Save &amp; Finish Later
          </button>
              </header>
              
              <main className="w-full max-w-3xl relative z-10 mx-auto">
                  
              </main>
      </div>
    </div>
  );
};

export default Onboarding;
