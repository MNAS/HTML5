function saveNote()
{  
  var name = document.getElementById('notename').value;       //создание переменной, хранящей значение введенное в поле Наименование.
  var content = document.getElementById('notecontent').value; //создание переменной для хранения текста самой записи
  if(content == '')
  {
    alert('enter valid note text');                           //выводим предупреждающее сообщение, в случае, если не задан текст записи, см. рис. 4
  }
  else 
  {
    if (name == 0)
    { alert('enter valid note name');}                        //выводим предупреждающее сообщение, если не задано наименование записи, см. рис. 5
    else 
    { localStorage[name] = content;} //созданение записи в localStorage, обратите внимание, что наименование записи является идентификатором, по которому сможем извлечь текст записи
  } 
}
/*
Также отметим, что если пользователь выберет уже существующую запись и введет
новый текст, без изменения наименования, то, по сути, произойдет редактирование
записи, поскольку новое значение текста сохранится поверх старого, соответственно,
если будет изменено наименование записи, то, фактически, произойдет создание новой
*/


function listLoad()
{
  var list = document.getElementById('notelist');       //получаем доступ к элементу - списку нашей веб - страницы
/* 
цикл для перебора каждого значения, сохраненного в localStorage,
при этом i, принимает значение идентификатора хранимых данных, т.е., в нашем 
примере, переменная i содержит наименование записи
*/
  for(var i in localStorage)
  {
    var a = document.createElement('a');                                //создаем новый html
    a.setAttribute('onclick', "loadNote('"+i+"'); return false;");  //определяем атрибут onclick, при клике, в нашем случае, вызовется функция loadNote с параметром Наименования записи
    a.text = i;                                                    //задаем значение текста ссылки эквивалентным наименованию записи
    var element = document.createElement('li');                         //создаем новый html - элемент, а именно пункт списка
    element.appendChild(a);                                             //добавляем пункту списка дочерний элемент – ссылку
    list.appendChild(element);                                          //добавляем списку дочерний элемент – пункт списка
  }
}

function loadNote(v)
{
  document.getElementById('notecontent').value = localStorage[v];       //выводим в текстовое поле текст записи
  document.getElementById('notename').value = v;                        //выводим в поле наименование записи
}

function deleteNote()
{
  var name = document.getElementById('notename').value;                 //получаем значение наименования текущей записи из текстового поля
  if (name != '')
  { localStorage.removeItem(name);}                                      //удаление записи, в качестве идентификатора записи используется ее наименование
  else 
  { alert('note not found');}                                            //сообщение, выдаваемое при попытке удалить неопределенную запись
}

