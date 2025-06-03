<script setup lang="ts">

</script>

<template>
  <section id="footer">
    <div class="text-center d-grid gap-3">
      <div>
        <h5>Guichardon Samuel</h5>
        <p><em>Développeur Web Freelance</em></p>
      </div>
      <div class="col-1 mx-auto d-flex justify-content-around align-items-center">
        <a href="https://www.linkedin.com/in/samuel-guichardon/">
          <svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="currentColor" viewBox="0 0 24 24">
            <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://github.com/SamS-G?tab=repositories">
          <svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="currentColor" viewBox="0 0 24 24">
            <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/people/WebConceptions/100075981702364/">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
          >
            <path
                d="M12 0C5.373 0 0 5.373 0 12c0 5.991 4.388 10.954 10.125 11.854v-8.385H7.078V12h3.047V9.356c0-3.007 1.793-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.954.926-1.954 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.991 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>

        </a>
      </div>
      <div>
        <p>© 2025 Samuel Guichardon. Tous droits reserves.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#footer {
  background-color: #111827;
  padding: 3rem;
}

div:nth-child(1n) {
  color: white;
}

div:nth-child(1n) p {
  margin: 0;
}

div:nth-child(2n) a svg, div:nth-child(1n) p {
  color: #9CA3AF;
}

div:nth-child(2n) a svg {
  transition: transform 0.2s ease;
}

div:nth-child(2n) a:hover svg {
  transform: scale(1.2);
}
</style>