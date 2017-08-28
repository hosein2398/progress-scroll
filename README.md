
# Progress-scroll
This library helps you get nice navbar on your screen to tell user how much of an article has been read by them.

# Demo 
You can see a demo of this [here](https://hosein2398.github.io/progress-scroll/).

# Usage
Load the script on your page and then:
```JS
ProgressScroll({
    element: ".test",
    color: "black",
    height: "8px",
    beforeRun: function () {
      // do something
    },
    onRuning: function () {
      //do something
    },
    onCompelete: function () {
      //do something
    }
});

```
This example was full-optioned one so you saw all available option to call `ProgressScroll` .
