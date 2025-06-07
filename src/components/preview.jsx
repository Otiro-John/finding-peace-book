import React from 'react';
import './preview.css';
import { TypeAnimation } from 'react-type-animation';

const Preview = () => {
  const styles = {
    text: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.125rem',
      whiteSpace: 'pre-wrap',
      lineHeight: 1.75,
      color: '#444',
    },
  };

  return (
    <div className="preview-section">
      <div className="title">
        <h2>📖 Chapter One Preview</h2>
        <h3>
          Peace isn’t the absence of chaos. It’s the ability to remain steady
          <br />
          when everything around you trembles.
        </h3>
      </div>
      <TypeAnimation
        sequence={[
          `In this chapter, I open up about a season in my life where everything felt uncertain. I was surrounded by noise — not the kind you hear, but the kind that keeps you awake at night. Doubts about my future, fear of failure, and the quiet ache of feeling alone. I called it “the storm within.”

But it was in that storm that I started to notice something deeper. A whisper of stillness. A gentle nudge reminding me that I wasn’t abandoned, that God was still present even when I couldn’t feel Him. It wasn’t dramatic. It was subtle — like learning how to breathe again after holding it in for too long.

Through raw moments of honesty, prayer, and surrender, I began to understand that peace isn’t something you chase outside of yourself. It’s something you uncover when you invite God into your most broken places.

This chapter is for the soul that’s weary but still hoping. For the heart that’s scared but still searching. May it remind you that storms may roar, but peace has a voice too — and it's often found in the quiet.`,
        ]}
        wrapper="p"
        speed={50}
        style={styles.text}
        repeat={0}
      />
    </div>
  );
};

export default Preview;
