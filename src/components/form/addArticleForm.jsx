import { React, useState, useEffect } from 'react';
import {useHistory} from 'react-router'
import TextField from './textField';
import MultipleSelectField from "./multipleSelectField"
import api from '../../api';

const AddArticleForm = () => {
  console.log('ghfdhdfgh');
  const [inputValue, setInputValue] = useState({ title: null, author: null, contant: null });
  const history = useHistory()
  const [tags, setTags] = useState()
   useEffect(function () {
     api.tags.fetchAll().then((data) => {
       setTags(data);
     });
   }, []);

  function handleChange(target) {
    setInputValue((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }
  function SaveArticle(){
    function getTags(){
      return inputValue.tags.map(selectedTag => {
        return Object.keys(tags).indexOf(selectedTag.label) !== -1 ? tags[selectedTag.label] : null
      })
    }
    api.articles.add({...inputValue, tags: getTags()})
    history.push()
  }
  if (tags){
  return (
    <div className="add-article__form">
      <TextField
        fieldType={'text'}
        fieldName={'title'}
        onHandleChange={handleChange}
        fieldLable={"Enter article's title"}
        value={inputValue.title || ''}
        placeholder={'Articl title'}
        classes={'add-article__input'}
      />
      <MultipleSelectField
        name={'tags'}
        lable={'Choose tags'}
        options={tags}
        onHandleChange={handleChange}
      />
      <TextField
        fieldType={'textarea'}
        fieldName={'contant'}
        onHandleChange={handleChange}
        fieldLable={'Enter article'}
        value={inputValue.contant || ''}
        placeholder={'Article text'}
        classes={'add-article__textarea'}
      />
      <button onClick={SaveArticle} className="btn add-article__btn">
        Add article
      </button>
    </div>
  );}
  return <h1>Loading...</h1>
}
 
export default AddArticleForm;