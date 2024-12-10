<template>
    <div class="voting-page">
      <h2>Welcome, {{ teamName }}!</h2>
      <p>Use the form below to vote for each category (0 - 10). <span @click="showHint" class="hint-button">Hint</span></p>
      
  
      <form @submit.prevent="submitVote">
          <label for="team">Team <span>(The team who's cocktail you've just tasted)</span>:</label>
          <select id="team" v-model="formData.team">
            <option disabled value="">-- Choose team --</option>
            <option v-for="team in teams" :key="team" :value="team">{{ team }}</option>
          </select>
  
          <label for="taste">Taste:</label>
          <select id="taste" v-model="formData.taste">
            <option disabled value="">-- Choose points --</option>
            <option v-for="n in 11" :key="n" :value="n-1">{{ n-1 }}</option>
          </select>
  
          <label for="presentation">Presentation:</label>
          <select id="presentation" v-model="formData.presentation">
            <option disabled value="">-- Choose points --</option>
            <option v-for="n in 11" :key="n" :value="n-1">{{ n-1 }}</option>
          </select>
  
          <label for="christmasness">Christmasness:</label>
          <select id="christmasness" v-model="formData.christmasness">
            <option disabled value="">-- Choose points --</option>
            <option v-for="n in 11" :key="n" :value="n-1">{{ n-1 }}</option>
          </select>
  
        <button type="submit" class="submit-button">Submit</button>
      </form>
  
      <!-- <div class="team-list">
        <h3>Teams:</h3>
        <ul>
          <li v-for="team in teams" :key="team">{{ team }}</li>
        </ul>
      </div> -->
    </div>
  </template>
  
  <style>
    form {
        display: flex;
        flex-direction: column;
        text-align: left;
        select {
            background: #999999;
            color: #fff;
            border-radius: 16px;
            padding: 20px 15px;
            width: auto;
            margin-top: 12px;
            margin-bottom: 18px;
            border: none;
            &::placeholder {
            color: #fff;
            }
            &::after {
                display: none;
            }
        }
        span {
            color: #c62118;
            font-size: 14px;
        }
    }
    .hint-button {
        color: #c62118;
        font-size: 16px;
        text-decoration: underline;
        transition: ease .3s;
        &:hover {
            color: #a81613;
        }
    }
  </style>

  <script>
  export default {
    data() {
      return {
        teamName: this.$route.query.team || '',
        formData: {
          team: '',
          taste: '',
          presentation: '',
          christmasness: '',
        },
        teams: ['Hannah, Louis & Jack', 'Ben, Abbie, Dom & Mary', 'Josh, Elise & Peter', 'Jonny, Emily & Stuart'],
      };
    },
    methods: {
        submitVote() {
            console.log('Votes submitted:', this.formData);
            alert('Thanks for voting!');
        },
        showHint() {
            alert('0 is Awful - 10 is Amazing');
        },

    },
  };
  </script>
  
  
  