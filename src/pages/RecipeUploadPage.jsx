
import React, { useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './RecipeUploadPage.css';

const RecipeUploadPage = () => {
    const location = useLocation();
    const { category } = location.state || { category: 'Default Category' };
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
  
    const openFilePicker = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
    return (
      <div className="recipe-upload">
        <Link to="/">Back to home</Link>
        <h1>Upload Your {category} Recipe</h1>
        <form id='recipe-form'>
          <label htmlFor="Drag_or_browse_files" onClick={openFilePicker} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingBlock: '80px',
            borderRadius: '0px',
            gap: '20px',
            border: '1px solid #00000080',
            cursor: 'pointer'
          }}>
            <div style={{ width: '44px', height: 'auto', marginBottom: '-10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 33 32" fill="none"><path d="M28.4827 21.3333C28.4884 21.191 28.4709 21.0487 28.4307 20.912L25.764 12.912C25.676 12.6464 25.5064 12.4153 25.2795 12.2516C25.0526 12.0878 24.7798 11.9998 24.5 12H19.1667V14.6667H23.5387L25.7613 21.3333H7.23867L9.46133 14.6667H13.8333V12H8.5C8.22018 11.9998 7.94742 12.0878 7.72049 12.2516C7.49357 12.4153 7.32404 12.6464 7.236 12.912L4.56933 20.912C4.52915 21.0487 4.51158 21.191 4.51733 21.3333C4.5 21.3333 4.5 28 4.5 28C4.5 28.3536 4.64048 28.6928 4.89052 28.9428C5.14057 29.1929 5.47971 29.3333 5.83333 29.3333H27.1667C27.5203 29.3333 27.8594 29.1929 28.1095 28.9428C28.3595 28.6928 28.5 28.3536 28.5 28C28.5 28 28.5 21.3333 28.4827 21.3333ZM21.8333 10.5387C22.1787 10.5387 22.524 10.412 22.776 10.1613C23.026 9.9113 23.1664 9.57222 23.1664 9.21867C23.1664 8.86511 23.026 8.52604 22.776 8.276L16.5 2L10.224 8.276C9.97404 8.52604 9.83362 8.86511 9.83362 9.21867C9.83362 9.57222 9.97404 9.9113 10.224 10.1613C10.476 10.4133 10.8213 10.5387 11.1667 10.5387C11.512 10.5387 11.8573 10.4133 12.1093 10.1613L15.1667 7.104V16C15.1667 16.3536 15.3071 16.6928 15.5572 16.9428C15.8072 17.1929 16.1464 17.3333 16.5 17.3333C16.8536 17.3333 17.1928 17.1929 17.4428 16.9428C17.6929 16.6928 17.8333 16.3536 17.8333 16V7.104L20.8907 10.1613C21.1426 10.4069 21.4816 10.5426 21.8333 10.5387Z" fill="black"></path></svg>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: '600' }}>Upload Photos</h2>
            <h2 style={{ fontSize: '24px', fontWeight: '500' }}>(or drag and drop up to 5 photos)</h2>
            {selectedFile && <p style={{ fontSize: '20px', color: 'black' }}>{selectedFile.name}</p>}
          </label>
          <input
            type="file"
            id="form-field-attachment"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          
          <label htmlFor="recipeName">Recipe Name</label>
          <input type="text" id="recipeName" placeholder="What do you call your recipe?" />
  
          <label htmlFor="ingredients">Ingredients</label>
          <textarea id="ingredients" placeholder="List your ingredients."></textarea>
  
          <label htmlFor="procedure">Procedure</label>
          <textarea id="procedure" placeholder="How do you cook your recipe?"></textarea>
  
          <label htmlFor="calories">Calory Count</label>
          <input type="number" id="calories" placeholder="What's your calory count?" />
  
          <label htmlFor="nutrition">Nutrition Values</label>
          <input type="text" id="nutrition" placeholder="List your nutrition values" />
  
          <label htmlFor="tags">Recipe Tags</label>
          <input type="text" id="tags" placeholder="Add a tag" />
  
          <button type="submit">Post Recipe</button>
        </form>
      </div>
    );
  };
  
  export default RecipeUploadPage;
  