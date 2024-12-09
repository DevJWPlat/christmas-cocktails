<template>
    <div class="team-wrapper">
      <div class="back">
        <button @click="goBack" class="back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z"
            />
          </svg>
          Back
        </button>
      </div>
      <div class="text">
        <p>If this is the wrong team press back at the top of this screen.</p>
        <h3>Time to vote on Hannah, Louis & Jack's cocktail.</h3>
        <h4>Use the inputs below to vote for each category. (0 - 10)</h4>
      </div>
      <form @submit.prevent="handleSubmit">
        <!-- Presentation -->
        <label for="presentation">Presentation</label>
        <select v-model="selectedPresentation" required>
          <option disabled value="">-- Choose points --</option>
          <option v-for="point in points" :key="point" :value="point">
            {{ point }}
          </option>
        </select>
  
        <!-- Decorations -->
        <label for="decorations">Decorations</label>
        <select v-model="selectedDecorations" required>
          <option disabled value="">-- Choose points --</option>
          <option v-for="point in points" :key="point" :value="point">
            {{ point }}
          </option>
        </select>
  
        <!-- Taste -->
        <label for="taste">Taste</label>
        <select v-model="selectedTaste" required>
          <option disabled value="">-- Choose points --</option>
          <option v-for="point in points" :key="point" :value="point">
            {{ point }}
          </option>
        </select>
  
        <!-- Submit Button -->
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  

<style scoped lang="scss">
    .back {
        display: flex;
        button {
            max-width: max-content;
            display: flex;
            align-items: center;
            svg {
                width: 15px;
                margin-right: 12px;
                path {
                    fill: #fff;
                }
            }
        }
    }
    .text {
        display: flex;
        flex-direction: column;
        text-align: left;
        h3 {
            margin-top: 0;
            font-size: 24px;
        }
        p {
            font-size: 14px;
        }
        h4 {
            margin-top: 0;
            font-size: 18px;
        }
    }
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
            margin-bottom: 12px;
            border: none;
            &::placeholder {
              color: #fff;
            }
            &::after {
                display: none;
            }
        }
    }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'hlj',
  data() {
    return {
      selectedPresentation: "", // Separate state for Presentation
      selectedDecorations: "", // Separate state for Decorations
      selectedTaste: "", // Separate state for Taste
      points: Array.from({ length: 11 }, (_, i) => i), // Creates the array [0, 1, 2, ..., 10]
    };
  },
  methods: {
    handleSubmit() {
      console.log('Presentation Score:', this.selectedPresentation);
      console.log('Decorations Score:', this.selectedDecorations);
      console.log('Taste Score:', this.selectedTaste);

      alert(
        `You selected:\nPresentation: ${this.selectedPresentation}\nDecorations: ${this.selectedDecorations}\nTaste: ${this.selectedTaste}`
      );

      // Redirect after submission
      window.location.href = "/next-page";
    },
  },
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    return {
      goBack,
    };
  },
});
</script>
