import React from 'react';

 export default (props) => {
   const {
     cancel,
     submit,
     submitButtonText,
     elements,
   } = props;

   function handleSubmit(event) {
     event.preventDefault();
     submit();
   }

   function handleCancel(event) {
     event.preventDefault();
     cancel();
   }
    // For to Create Course
    return (                   
     <div className="bounds course--detail">
       <h1>{submitButtonText}</h1>        
       <div>
         <ErrorsDisplay errors={props.errors} />
         <form onSubmit={handleSubmit}>
         {elements()}
           <div className="grid-100 pad-bottom">
             <button className="button" type="submit">{submitButtonText}</button>
             <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
           </div>
         </form>
       </div>
     </div>
   );
 }

 function ErrorsDisplay({ errors }) {
   let errorsDisplay = null;
   if (errors.length > 0) {
     errorsDisplay = (
       <div>
         <h2 className="validation--errors--label">Validation errors</h2>
         <div className="validation-errors">
           <ul>
             {errors.map((error, i) => <li key={i}>{error}</li>)}
           </ul>
         </div>
       </div>
     );
   }

   return errorsDisplay;
 }