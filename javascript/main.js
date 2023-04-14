let runBtn = document.getElementById("run-btn");
      let result = document.getElementById("result");
      let editor = document.getElementById("editor");

      runBtn.addEventListener("click", function() {
        result.innerHTML = editor.value;
      });

    
   