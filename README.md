# Form Data Object [![badge-size]](#no-link) [![npm version][badge-version]][link-npm]

[badge-size]: http://img.badgesize.io/chrisboakes/form-data-object/master/dist/form-data-object.min.js
[badge-version]: https://img.shields.io/npm/v/form-data-object.svg
[link-npm]: https://www.npmjs.com/package/form-data-object

> Creates a single FormData object (or generic javascript object - optional) from multiple wrapper elements and encodes the data (optional) with no framework dependencies.

- Fast and lightweight
- Doesn't rely on a form tag (you can use whichever wrapper tag you like)
- You can use multiple wrappers
- Optionally encodes the data
- No framework dependencies

## Installation
However you like:
```html
<script src="dist/form-data-object.min.js"></script>
```

```sh
npm install --save form-data-object
```

## Usage
1. Import the plugin
    ```js
        import allFormData from 'form-data-object';
    ```

2. Instantiate the class and pass it your wrapper elements in an array. E.g.
    ```js
        let myFormData = new allFormData([document.getElementById('my-form'), document.getElementById('my-other-div')]);
    ```
    or, if you just want a single wrapper
    ```js
        let myFormData = new allFormData([document.getElementById('my-form')]);
    ```
    maybe you don't want the data to be encoded
    ```js
        let myFormData = new allFormData([document.getElementById('my-form')], false);
    ```
    maybe you want the data returned as a generic javascript object (instead of FormData)
    ```js
        let myFormData = new allFormData([document.getElementById('my-form')], true, true);
    ```

3. Call method to return the single FormData object. E.g.
    ```js
        myFormData.getFormData()
    ```

## Parameters
### `(wrappers, encode, jsObject)`

<table>
    <tr>
        <th>parameter</th>
        <th>description</th>
    </tr>
    <tr>
        <th><code>wrapper(s)</code></th>
        <td>
            Type: <code>array</code><br>
            Default: <code>null</code><br><br>
            Array of DOM wrappers. If using a single wrapper, just place it in an array. More info in the <a href="#usage">Usage</a> section
        </td>
    </tr>
    <tr>
        <th><code>encode</code></th>
        <td>
            Type: <code>boolean</code><br>
            Default: <code>true</code><br><br>
            Do you want the data to use Javascript's <code>encodeURIComponent()</code>       
        </td>
    </tr>
    <tr>
        <th><code>jsObject</code></th>
        <td>
            Type: <code>boolean</code><br>
            Default: <code>false</code><br><br>
            Do you want to return a generic Javascript object instead of a <code>FormData()</code> object?
        </td>
    </tr>
</table>

MIT © [Chris Boakes](https://twitter.com/cboakes)
