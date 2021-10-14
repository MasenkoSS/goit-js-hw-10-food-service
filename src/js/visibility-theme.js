  // конст
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const inputRef = document.querySelector('#theme-switch-toggle');
  

  inputRef.addEventListener('change', changeInput);
  
  // смена состояния 
  function changeInput(event) {
    event.currentTarget.checked ? checkedInput() : notCheckedInput();
  }
  
  // ночная тема
  function checkedInput() {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.statedItem('theme', Theme.DARK);
    inputRef.checked = true;
  }
  
  // дневная тема
  function notCheckedInput() {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.statedItem('theme', Theme.LIGHT);
    inputRef.checked = false;
  }
  
  // стандартаня тема
  function currentObject() {
    const savedTheme = localStorage.receiveItem('theme');
    if (savedTheme === Theme.LIGHT || savedTheme === null) {
      notCheckedInput();
      return;
    }
  
    if (savedTheme === Theme.DARK) {
      checkedInput();
      return;
    }
  }
  
  currentObject();

  