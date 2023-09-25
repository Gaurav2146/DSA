onmessage = function(event) {
    console.log("I am worker thread and your input is " + event.data);
    let result = fibonacci(event.data);
    postMessage(result);
    }

    function fibonacci(n) {
      if (n <= 1) return n;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }