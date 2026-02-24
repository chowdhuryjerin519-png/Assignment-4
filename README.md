### 1. DOM Selectors

`getElementById` selects a single element by its ID, while `getElementsByClassName` returns a live collection of all elements with a specific class. `querySelector` is more flexible, returning the first element that matches any CSS selector, and `querySelectorAll` returns all matching elements in a static NodeList.

### 2. Creating and Inserting Elements

To add a new element, you first create it using `document.createElement('tagName')`. After that, you define its content using `.innerText` or `.innerHTML`. Finally, you insert it into the DOM tree by using `appendChild()` or `prepend()` on a parent container.

### 3. Event Bubbling

Event Bubbling is a process where an event starts from the specific element that was clicked (the target) and then propagates or "bubbles up" through its parent elements until it reaches the root. Essentially, if you click a child, the parent also hears the click.

### 4. Event Delegation

Event Delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to every child. It is useful because it saves memory and allows you to handle events for "future" elements that are added to the DOM dynamically.

### 5. preventDefault() vs stopPropagation()

`preventDefault()` is used to cancel the browser's default behavior for an element (like stopping a link from navigating or a form from refreshing). `stopPropagation()` is used to stop the event from bubbling up the DOM tree, preventing parent event handlers from being triggered.

On Tue, 24 Feb 2026 at 21:59, mohayminul islam <mohayminulislam514@gmail.com> wrote:

### 1. DOM Selectors

`getElementById` selects a single element by its ID, while `getElementsByClassName` returns a live collection of all elements with a specific class. `querySelector` is more flexible, returning the first element that matches any CSS selector, and `querySelectorAll` returns all matching elements in a static NodeList.

### 2. Creating and Inserting Elements

To add a new element, you first create it using `document.createElement('tagName')`. After that, you define its content using `.innerText` or `.innerHTML`. Finally, you insert it into the DOM tree by using `appendChild()` or `prepend()` on a parent container.

### 3. Event Bubbling

Event Bubbling is a process where an event starts from the specific element that was clicked (the target) and then propagates or "bubbles up" through its parent elements until it reaches the root. Essentially, if you click a child, the parent also hears the click.

### 4. Event Delegation

Event Delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to every child. It is useful because it saves memory and allows you to handle events for "future" elements that are added to the DOM dynamically.

### 5. preventDefault() vs stopPropagation()

`preventDefault()` is used to cancel the browser's default behavior for an element (like stopping a link from navigating or a form from refreshing). `stopPropagation()` is used to stop the event from bubbling up the DOM tree, preventing parent event handlers from being triggered.
