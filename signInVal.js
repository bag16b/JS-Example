const issueFieldType = {
    email: 'required',
    password: 'required',
  };
  
  function validateSignIn(issue) {
    const errors = [];
    Object.keys(issueFieldType).forEach(field => {
      if (issueFieldType[field] === 'required' && !issue[field]) {
        errors.push(`Missing mandatory field: ${field}`);
      }
    });
  
    return (errors.length ? errors.join('; ') : null);
  }
  
  export default {
    validateSignIn,
  };
