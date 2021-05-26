// React imports
import React from 'react';

// Component imports
import Article from '../../../components/Article';

// Style imports
import { Image } from '../styles';
import FirstImage from './images/image01.png';
import SecondImage from './images/image02.png';

/**
 * The selected works page.
 */
const WorkThree = () => {
  return (
    <Article title="Give Them a Show" subtext="Calcite UI Icons React">
      <h6>Pick Up and Run</h6>

      <br />

      <p>
        The previous maintainer of Calcite UI Icons React or CUI Icons React as
        I refer to it, needed to offload the repo. I took up the mantle of
        maintainer and I was super excited to contribute to a Calcite adjacent
        library. I already had a plan to make the library just that more usable.
      </p>

      <br />

      <figure>
        <Image src={FirstImage} alt="Calcite UI Icons for React" />

        <figcaption>Calcite UI Icons for React</figcaption>
      </figure>

      <br />

      <h6>Planning and Building</h6>

      <br />

      <p>
        In generating the new React based icons from the CUI Icons, the filename
        had to be written from a hyphenated form to camel case. Numbers also
        needed to be spelled out for React component files names, i.e. 3 would
        become Three. This creates a bit of a disconnect when a developer goes
        to look for an icon they want to use in the CUI Icons library but it’s
        not exactly the same file name when referencing it in CUI Icons React.
        So, I decided to build a new icon reference page specifically for the
        React icon file names.
      </p>

      <br />

      <h6>Making Life Easier</h6>

      <br />

      <p>
        I wrote a Node script to generate the icon components and copy the
        imports and layout into a single file so it can be delivered to a web
        page. The app itself was a quick and easy build with React and
        Calcite-React. Style customizations were done using styled-components.
      </p>

      <p>
        The app allows for a file name search and lets users test icon size. The
        most important feature is the ability to copy an icon file name or
        import statement with the click of button.
      </p>

      <br />

      <figure>
        <Image src={SecondImage} alt="Interacting with an icon" />

        <figcaption>CUI Icons React / Icon copy options</figcaption>
      </figure>

      <br />

      <p>
        Check out the result here:{' '}
        <a href="https://r-watkins.github.io/cui-icons-reference/">
          r-watkins.github.io/cui-icons-reference
        </a>
      </p>

      <br />
    </Article>
  );
};

export default WorkThree;
