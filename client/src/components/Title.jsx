import React from 'react';

const Title = ({ title = '', subTitle = '', align = 'center' }) => {
  return (
    <div
      className={`flex flex-col ${align === 'left' ? 'items-start text-left' : 'items-center text-center'} gap-1 mb-5`}
    >
      <h1 className="font-semibold text-4xl md:text-[40px]">{title}</h1>
      <p className="text-sm md:text-base text-gray-500/90 max-w-md">{subTitle}</p> {/* changed max-w */}
    </div>
  );
};

export default Title;
