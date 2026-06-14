// Q26: Bubbling order mein output kya hoga?
// <div id='parent'><span id='child'>click</span></div>
// Dono pe click listener (bubbling)
// Span click karne par?

// Output:
// child
// parent



// Q27: Kya aayega?

const el = document.createElement('div');
el.textContent = '<b>bold</b>';
console.log(el.innerHTML);

// Output:
// <b>bold</b>



// Q28: Dono ka fark explain karo:

// e.stopPropagation()
// → Event bubbling/capturing rokta hai

// e.preventDefault()
// → Browser ka default action rokta hai

// Dono saath ho:
// → Default action bhi rukega
// → Event parent tak bhi nahi jayega



// Q29: Kya return karega aur kyun?

localStorage.setItem('x', { a: 1 });
console.log(localStorage.getItem('x'));

// Output:
// [object Object]



// Q30: Kya print hoga?

const ul = document.createElement('ul');
ul.innerHTML = '<li>A</li><li>B</li>';

const items = ul.querySelectorAll('li');

items.forEach(i => i.remove());

console.log(ul.children.length);

// Output:
// 0



// Q31: Difference?

document.getElementById('myId');
document.querySelector('#myId');

// Dono same element return karte hain

// Difference:
// getElementById()
// → Faster
// → Sirf id ke liye

// querySelector()
// → Any CSS selector
// → '#id', '.class', 'div > p' etc.



// Q32: Kya print hoga?

const p = document.createElement('p');

document.body.appendChild(p);

p.addEventListener('click', () => console.log('fired'));

p.dispatchEvent(new Event('click'));

p.remove();

p.dispatchEvent(new Event('click'));

// Output:
// fired
// fired



// Q33: input vs change

// 1) User type kare
// Output:
// input

// 2) User Tab dabaye (focus lose)
// Output:
// change



// Q34: e.target vs e.currentTarget

// Parent listener
// Child clicked

// e.target
// → Actual clicked element
// → child

// e.currentTarget
// → Listener attached element
// → parent

// Example Output:
// target = child
// currentTarget = parent



// Q35: sessionStorage behavior

sessionStorage.setItem('key', 'val');

// Same tab + reload
// Output:
// val

// New tab
// Output:
// null



// Q36: Event Delegation

const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    console.log(e.target.textContent);
  }
});



// Q37: DOM Manipulation

const para = document.querySelector('p');

para.textContent = 'New Text';

para.style.backgroundColor = 'yellow';



// Q38: virtualDOM(config)

function virtualDOM(config) {
  const el = document.createElement(config.tag);

  if (config.props) {
    Object.entries(config.props).forEach(([k, v]) => {
      el.setAttribute(k, v);
    });
  }

  if (config.text) {
    el.textContent = config.text;
  }

  if (config.children) {
    config.children.forEach(child => {
      el.appendChild(virtualDOM(child));
    });
  }

  return el;
}



// Q39: Form Validation

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();

  let errors = [];

  if (!name) {
    errors.push('Name required');
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.push('Invalid Email');
  }

  document.querySelector('#errors').innerHTML =
    errors.map(err => `<p>${err}</p>`).join('');
});



// Q40: Drag & Drop Reorder

let dragged;

document.querySelectorAll('li').forEach(li => {

  li.draggable = true;

  li.addEventListener('dragstart', () => {
    dragged = li;
  });

  li.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  li.addEventListener('drop', () => {
    li.parentNode.insertBefore(
      dragged,
      li
    );

    saveOrder();
  });

});

function saveOrder() {
  const order = [...document.querySelectorAll('li')]
    .map(li => li.textContent);

  localStorage.setItem(
    'order',
    JSON.stringify(order)
  );
}



// Q41: localStorage Wrapper

class StorageWrapper {

  set(key, value, ttlSeconds) {

    const data = {
      value,
      expiry: ttlSeconds
        ? Date.now() + ttlSeconds * 1000
        : null
    };

    localStorage.setItem(
      key,
      JSON.stringify(data)
    );
  }

  get(key) {

    const raw = localStorage.getItem(key);

    if (!raw) return null;

    const data = JSON.parse(raw);

    if (
      data.expiry &&
      Date.now() > data.expiry
    ) {
      localStorage.removeItem(key);
      return null;
    }

    return data.value;
  }

  remove(key) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}



// Q42: Counters

let sessionCount =
  Number(sessionStorage.getItem('count')) || 0;

sessionStorage.setItem(
  'count',
  ++sessionCount
);

document.querySelector('#session')
  .textContent = sessionCount;


let localCount =
  Number(localStorage.getItem('count')) || 0;

localStorage.setItem(
  'count',
  ++localCount
);

document.querySelector('#local')
  .textContent = localCount;



// Q43: MutationObserver

const observer = new MutationObserver(
  (mutations) => {

    mutations.forEach(m => {

      m.addedNodes.forEach(node => {

        if (
          node.nodeType === 1 &&
          node.hasAttribute('data-track')
        ) {
          console.log('Tracked:', node);
        }

      });

    });

  }
);

observer.observe(
  document.body,
  {
    childList: true,
    subtree: true
  }
);

// Cleanup
observer.disconnect();



// Q44: Image Gallery

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg'
];

let current = 0;

const preview =
  document.querySelector('#preview');

function show(i) {
  current = i;
  preview.src = images[i];
}

document.querySelector('#next')
  .onclick = () =>
    show(
      (current + 1) %
      images.length
    );

document.querySelector('#prev')
  .onclick = () =>
    show(
      (current - 1 + images.length) %
      images.length
    );

document.addEventListener(
  'keydown',
  e => {

    if (e.key === 'ArrowRight') {
      document.querySelector('#next').click();
    }

    if (e.key === 'ArrowLeft') {
      document.querySelector('#prev').click();
    }

  }
);



// Q45: PubSub Module

const PubSub = (() => {

  const events = {};

  return {

    subscribe(event, fn) {

      (events[event] ||= [])
        .push(fn);

    },

    publish(event, data) {

      (events[event] || [])
        .forEach(fn => fn(data));

    },

    unsubscribe(event, fn) {

      events[event] =
        (events[event] || [])
          .filter(f => f !== fn);

    }

  };

})();



// Q46: DOM Traversal Utility

function getSiblings(el) {

  return [...el.parentNode.children]
    .filter(x => x !== el);

}

function getAncestors(el) {

  const arr = [];

  while (el.parentElement) {

    arr.push(el.parentElement);

    el = el.parentElement;

  }

  return arr;

}

function getAllDescendants(el) {

  return [...el.querySelectorAll('*')];

}



// Q47: Debounce & Throttle

function debounce(fn, ms) {

  let timer;

  return (...args) => {

    clearTimeout(timer);

    timer = setTimeout(
      () => fn(...args),
      ms
    );

  };

}

function throttle(fn, ms) {

  let allowed = true;

  return (...args) => {

    if (!allowed) return;

    allowed = false;

    fn(...args);

    setTimeout(
      () => allowed = true,
      ms
    );

  };

}

window.addEventListener(
  'resize',
  debounce(() => {
    console.log('resize');
  }, 300)
);

window.addEventListener(
  'mousemove',
  throttle(() => {
    console.log('move');
  }, 300)
);



// Q48: Keyboard Shortcut System

class ShortcutManager {

  constructor() {
    this.shortcuts = {};
  }

  add(key, fn) {
    this.shortcuts[key] = fn;
  }

  remove(key) {
    delete this.shortcuts[key];
  }

}

const manager =
  new ShortcutManager();

manager.add('Ctrl+s',
  () => console.log('Saved!')
);

manager.add('Ctrl+z',
  () => console.log('Undo!')
);

manager.add('Escape',
  () => console.log('Cancelled')
);

document.addEventListener(
  'keydown',
  e => {

    const key =
      e.ctrlKey
        ? `Ctrl+${e.key}`
        : e.key;

    manager.shortcuts[key]?.();

  }
);



// Q49: Lazy Image Loader

const observer2 =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting
        ) {

          const img =
            entry.target;

          img.src =
            img.dataset.src;

          observer2.unobserve(img);

        }

      });

    }
  );

document
  .querySelectorAll('img[data-src]')
  .forEach(img =>
    observer2.observe(img)
  );



// Q50: Dynamic Table

const data = [
  {
    name: 'Rahul',
    age: 25,
    city: 'Panipat'
  },
  {
    name: 'Amit',
    age: 30,
    city: 'Delhi'
  }
];

const table =
  document.createElement('table');

const header =
  document.createElement('tr');

Object.keys(data[0])
  .forEach(key => {

    const th =
      document.createElement('th');

    th.textContent = key;

    header.appendChild(th);

  });

table.appendChild(header);

data.forEach(row => {

  const tr =
    document.createElement('tr');

  Object.values(row)
    .forEach(val => {

      const td =
        document.createElement('td');

      td.textContent = val;

      tr.appendChild(td);

    });

  table.appendChild(tr);

});

document.body.appendChild(table);

// Q56: Kya print hoga?

const div = document.createElement('div');
div.innerHTML = 'hi <scr' + 'ipt>alert(1)</scr' + 'ipt>';

console.log(div.textContent);

// Output:
// hi alert(1)



// Q57: Capturing vs Bubbling — exact order kya hoga?

// Parent => Child click

// parent capturing
// child capturing
// child bubbling
// parent bubbling

// Exact Order:
// Parent Capture
// Child Capture
// Child Bubble
// Parent Bubble



// Q58: cloneNode behavior

node.cloneNode(true);
// Deep clone
// Children bhi clone honge

node.cloneNode(false);
// Shallow clone
// Sirf current node clone hogi

// Event listeners clone honge?

// Output:
// NO

// addEventListener listeners clone nahi hote



// Q59: DocumentFragment kyun use karte hain?

// Option A
for (let i = 0; i < 100; i++) {
  parent.appendChild(
    document.createElement('div')
  );
}

// 100 DOM insertions
// Multiple reflow/repaint chances

// Option B

const frag =
  document.createDocumentFragment();

for (let i = 0; i < 100; i++) {

  frag.appendChild(
    document.createElement('div')
  );

}

parent.appendChild(frag);

// Single DOM insertion

// Better performance
// Less reflow
// Less repaint

// Best Practice:
// Large DOM updates => DocumentFragment



// Q60: Best Practice

// 1
el.style.color = 'red';

// Use when:
// Single dynamic style change



// 2
el.setAttribute(
  'style',
  'color:red'
);

// Use when:
// Entire inline style string set karni ho



// 3
el.classList.add('text-red');

// Best Practice
// Production apps
// CSS maintainability
// Reusable styles



// Q66: Accordion Component

document.querySelectorAll('.accordion-header')
  .forEach(header => {

    header.addEventListener(
      'click',
      () => {

        document
          .querySelectorAll(
            '.accordion-content'
          )
          .forEach(
            c => c.style.maxHeight = null
          );

        const content =
          header.nextElementSibling;

        content.style.maxHeight =
          content.scrollHeight + 'px';

      }
    );

  });

/*
.accordion-content{
  overflow:hidden;
  max-height:0;
  transition:max-height .3s ease;
}
*/



// Q67: Modal Class

class Modal {

  constructor({
    title,
    content,
    onClose
  }) {

    this.onClose = onClose;

    this.el =
      document.createElement('div');

    this.el.className =
      'modal-backdrop';

    this.el.innerHTML = `
      <div class="modal">
        <button class="close">X</button>
        <h2>${title}</h2>
        <div>${content}</div>
      </div>
    `;

    document.body.appendChild(
      this.el
    );

    this.bindEvents();
  }

  bindEvents() {

    this.el
      .querySelector('.close')
      .onclick = () => this.close();

    this.el.onclick = e => {

      if (
        e.target === this.el
      ) {
        this.close();
      }

    };

    document.addEventListener(
      'keydown',
      this.keyHandler =
        (e) => {

          if (
            e.key === 'Escape'
          ) {
            this.close();
          }

        }
    );

  }

  close() {

    this.el.remove();

    document.removeEventListener(
      'keydown',
      this.keyHandler
    );

    this.onClose?.();

  }

}



// Q68: Infinite Scroll

const loader =
  document.querySelector('#loader');

const sentinel =
  document.querySelector('#sentinel');

const observer =
  new IntersectionObserver(
    async entries => {

      if (
        entries[0].isIntersecting
      ) {

        loader.hidden = false;

        await fetchMoreData();

        loader.hidden = true;

      }

    },
    {
      rootMargin: '150px'
    }
  );

observer.observe(sentinel);

// Justification:
// IntersectionObserver
// Better than scroll events
// Less CPU usage



// Q69: Client-side Router

class Router {

  constructor() {

    this.routes = {};

    window.addEventListener(
      'popstate',
      () => this.resolve()
    );

  }

  on(path, handler) {

    this.routes[path] =
      handler;

  }

  navigate(path) {

    history.pushState(
      {},
      '',
      path
    );

    this.resolve();

  }

  back() {

    history.back();

  }

  resolve() {

    const path =
      location.pathname;

    this.routes[path]?.();

  }

}



// Q70: DOM Diffing

function diff(
  oldVNode,
  newVNode,
  el
) {

  if (
    oldVNode.text !==
    newVNode.text
  ) {

    el.textContent =
      newVNode.text;

  }

  if (
    oldVNode.tag !==
    newVNode.tag
  ) {

    const newEl =
      document.createElement(
        newVNode.tag
      );

    el.replaceWith(newEl);

  }

}



// Q74: Kya hoga?

const a =
  document.createElement('a');

a.href =
  'javascript:void(0)';

a.click();

console.log(
  'after click'
);

// Output:
// after click



// Q75: Toast Notification System

const toast = {

  show(
    message,
    type = 'success',
    duration = 3000
  ) {

    const el =
      document.createElement(
        'div'
      );

    el.className =
      `toast ${type}`;

    el.textContent =
      message;

    const close =
      document.createElement(
        'button'
      );

    close.textContent = '×';

    close.onclick =
      () => el.remove();

    el.appendChild(close);

    document.body.appendChild(el);

    setTimeout(
      () => el.remove(),
      duration
    );

  }

};



// Q78: Vanilla JS Todo App

// Features

// Add Task
// Delete Task
// Edit Task
// Mark Complete
// Filter All
// Filter Active
// Filter Done
// localStorage Persistence

// Structure

/*
todos = [
 {
   id,
   text,
   done
 }
]
*/

// Event Delegation

document
  .querySelector('#todoList')
  .addEventListener(
    'click',
    handleTodoActions
  );



// Q79: Live DOM Inspector

const panel =
  document.createElement('div');

document.body.appendChild(
  panel
);

document.addEventListener(
  'mouseover',
  e => {

    const el =
      e.target;

    panel.textContent =
      `
Tag: ${el.tagName}
Id: ${el.id}
Classes: ${el.className}
Length: ${el.innerHTML.length}
`;

    el.style.outline =
      '2px solid red';

  }
);



// Q81: Custom EventTarget Polyfill

class MyEventTarget {

  constructor() {

    this.events = {};

  }

  addEventListener(
    type,
    fn
  ) {

    (
      this.events[type]
      ||= []
    ).push(fn);

  }

  removeEventListener(
    type,
    fn
  ) {

    this.events[type] =
      (
        this.events[type]
        || []
      ).filter(
        f => f !== fn
      );

  }

  dispatchEvent(event) {

    (
      this.events[event.type]
      || []
    ).forEach(
      fn => fn(event)
    );

  }

}



// Q82: Live Search

function debounce(
  fn,
  ms
) {

  let t;

  return (...args) => {

    clearTimeout(t);

    t = setTimeout(
      () => fn(...args),
      ms
    );

  };

}

const search =
  document.querySelector(
    '#search'
  );

search.addEventListener(
  'input',
  debounce(
    filterList,
    300
  )
);

function filterList() {

  const value =
    search.value.toLowerCase();

  document
    .querySelectorAll('li')
    .forEach(li => {

      const text =
        li.textContent;

      li.innerHTML =
        text.replace(
          new RegExp(
            value,
            'gi'
          ),
          match =>
            `<b>${match}</b>`
        );

    });

}



// Q84: Kya print hoga?

const div2 =
  document.createElement(
    'div'
  );

div2.addEventListener(
  'click',
  () => console.log(1)
);

const clone =
  div2.cloneNode(true);

document.body.append(clone);

clone.click();

// Output:
// Nothing

// Event listeners clone nahi hote



// Q86: SortableTable

class SortableTable {

  constructor(
    data,
    table
  ) {

    this.data = data;

    this.table = table;

    this.direction = 1;

    this.render();

  }

  sort(key) {

    this.data.sort(
      (a, b) =>
        (
          a[key] > b[key]
            ? 1
            : -1
        ) *
        this.direction
    );

    this.direction *= -1;

    this.render();

  }

  render() {

    this.table.innerHTML = '';

    // render rows

  }

}



// Q87: Clipboard Copy Button

async function copyText(
  text,
  btn
) {

  try {

    await navigator.clipboard
      .writeText(text);

    let count = 3;

    btn.textContent =
      `Copied! ${count}`;

    const timer =
      setInterval(() => {

        count--;

        btn.textContent =
          `Copied! ${count}`;

        if (
          count === 0
        ) {

          clearInterval(
            timer
          );

          btn.textContent =
            'Copy';

        }

      }, 1000);

  } catch {

    prompt(
      'Copy manually:',
      text
    );

  }

}



// Q90: Form Auto Save

const textarea =
  document.querySelector(
    'textarea'
  );

const status =
  document.querySelector(
    '#status'
  );

textarea.value =
  localStorage.getItem(
    'draft'
  ) || '';

textarea.addEventListener(
  'input',
  debounce(() => {

    localStorage.setItem(
      'draft',
      textarea.value
    );

    status.textContent =
      'Draft saved at ' +
      new Date()
        .toLocaleTimeString();

  }, 1000)
);



// Q92: Image Carousel

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg'
];

let current =
  Number(
    localStorage.getItem(
      'slide'
    )
  ) || 0;

function show(i) {

  current = i;

  img.src =
    images[current];

  localStorage.setItem(
    'slide',
    current
  );

}

setInterval(() => {

  show(
    (current + 1)
    %
    images.length
  );

}, 3000);



// Q93: Virtual Scroll

const totalItems =
  10000;

const itemHeight =
  30;

container.addEventListener(
  'scroll',
  () => {

    const start =
      Math.floor(
        container.scrollTop /
        itemHeight
      );

    const visible =
      20;

    render(
      start,
      start + visible
    );

  }
);



// Q95: DOM Time Machine

const snapshots = [];

setInterval(() => {

  snapshots.push(
    document.body.outerHTML
  );

  if (
    snapshots.length > 10
  ) {

    snapshots.shift();

  }

}, 5000);

function undo() {

  if (
    snapshots.length
  ) {

    document.body.outerHTML =
      snapshots.pop();

  }

}



// Q97: ResizeObserver

const box =
  document.querySelector(
    '#box'
  );

const output =
  document.querySelector(
    '#size'
  );

const resizeObserver =
  new ResizeObserver(
    entries => {

      const rect =
        entries[0]
          .contentRect;

      output.textContent =
        `${rect.width} × ${rect.height}`;

    }
  );

resizeObserver.observe(
  box
);

// Cleanup

box.addEventListener(
  'remove',
  () => {

    resizeObserver.disconnect();

  }
);



// Q98: Kya print hoga aur kyun?

document.body.innerHTML = '';

document.body.innerHTML =
  '<div id=x></div>';

const el =
  document.getElementById(
    'x'
  );

document.body.innerHTML =
  '<div id=x></div>';

el.textContent = 'hi';

console.log(
  document.getElementById(
    'x'
  ).textContent
);

// Output:
// ""

// Reason:
// el old detached node ko point kar raha hai.
// New DOM mein jo #x hai uska text empty hai.+