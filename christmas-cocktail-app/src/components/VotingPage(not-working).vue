<template>
    <div>
      <h1>Vote for Your Favorite Cocktail!</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Your Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div>
          <label for="team">Team:</label>
          <select id="team" v-model="team" required>
            <option value="" disabled>Select a team</option>
            <option value="Team 1">Hannah, Louis & Jack</option>
            <option value="Team 2">Ben, Abbie, Dom & Mary</option>
            <option value="Team 3">Josh, Elise & Peter</option>
            <option value="Team 4">Jonny, Emily & Stuart</option>
          </select>
        </div>
        <div>
          <label for="presentation">Presentation (0-10):</label>
          <input type="number" id="presentation" v-model="presentation" min="0" max="10" required />
        </div>
        <div>
          <label for="decorations">Decorations (0-10):</label>
          <input type="number" id="decorations" v-model="decorations" min="0" max="10" required />
        </div>
        <div>
          <label for="taste">Taste (0-10):</label>
          <input type="number" id="taste" v-model="taste" min="0" max="10" required />
        </div>
        <button type="submit">Submit Vote</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";

  export default {
    data() {
      return {
        name: "",
        team: "",
        presentation: 0,
        decorations: 0,
        taste: 0,
      };
    },
    methods: {
      async submitForm() {
        const payload = {
          name: this.name,
          team: this.team,
          presentation: this.presentation,
          decorations: this.decorations,
          taste: this.taste,
        };

        try {
          const response = await axios.post(
            "https://script.google.com/macros/s/AKfycbyURIgstHWs0RfmNyPkIt7BUmdvfkgT2AN2m_sq68BPUxBxsKcBL-qq6qllj6iexa3S/exec",
            payload,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.data.success) {
            alert("Vote submitted successfully!");
          } else {
            alert("Failed to submit vote: " + response.data.error);
          }
        } catch (error) {
          console.error("Error submitting vote:", error);
          alert("An error occurred. Please try again.");
        }
      },
    },
  };
</script>

  