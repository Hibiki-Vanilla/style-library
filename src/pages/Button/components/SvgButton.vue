<template>
  <section class="page">
    <button class="c-button">Call to action</button>

  </section>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #ffe9e9;
$color-dark: darken($color, 10%);
$color-border: rgba(darken($color, 60%), 0.45);
$color-text: darken($color, 85%);

.page {
  align-items: center;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  line-height: 1.5;
  margin: 0;
  // min-height: 100vh;
  padding: 10vw 0;

  .c-button {
    background: $color;
    border-radius: 3em;
    border: 3px solid $color-border;
    color: $color-text;
    cursor: pointer;
    font-weight: bold;
    outline: none;
    padding: 1.25em 2em;
    position: relative;
    text-transform: uppercase;
    transform-style: preserve-3d;
    transition: all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &::before {
      background: $color-dark;
      border-radius: inherit;
      box-shadow: 0 0 0 2px $color-border, 0 0.6em 0 0 rgba($color, 0.6);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transform: translate3d(0, 0.75em, -1em);
      transition: all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      width: 100%;
    }

    &:hover {
      transform: translate(0, 0.25em);

      &::before {
        box-shadow: 0 0 0 2px $color-border, 0 0.45em 0 0 rgba($color, 0.8);
        transform: translate3d(0, 0.5em, -1em);
      }
    }
    &:active {
      background: $color;
      transform: translate(0, 0.75em);

      &::before {
        box-shadow: 0 0 0 3px $color-border, 0 0 $color;
        transform: translate3d(0, 0, -1em);
      }
    }
  }
}
</style>
