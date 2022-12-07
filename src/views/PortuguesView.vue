<template>
    <h1>
        SUCCESS STUDENT
    </h1>
    <div id="abrangent">
        <main>
            <div class="box">
                <input type="submit" >
                <div id="div1">The text above has been created dynamically.</div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    
  data() {
    return {
      message: {},
    };
  },
  methods: {
    addElement() {
        // create a new div element
        const newDiv = document.createElement("div");

        // and give it some content
        const newContent = document.createTextNode("Hi there and greetings!");

        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
    }  
    }
}
</script>