import React from 'react';
import { Button, Image } from 'react-bootstrap';

const NewFeatureScreen = () => {
  return (
    <div style={{
      display:'flex',
      justifyContent: 'centerÏ`'
    }}>
      <Button>
        <Image
          src={
            'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/09/Homer-Simpson-in-The-Simpsons.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5'
          }
          alt="new-feature"
          rounded
        />
      </Button>
    </div>
  );
};

export default NewFeatureScreen;
