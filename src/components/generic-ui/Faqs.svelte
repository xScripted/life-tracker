<script lang="ts">
  import { onMount } from 'svelte'

  //falta lo de los slots

  interface IQuestion {
    question: string
    answer: string
  }

  let faqs: IQuestion[] = [
    {
      question: 'pregunta1',

      answer:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vero rerum quidem, laudantium explicabo corporis similique voluptatem quod amet cupiditate. Quis autem accusamus aut ab velit. Porro dolorem atque voluptatum.',
    },
    {
      question: 'pregunta2',
      answer: 'respuestarespuesta1respuesta1respuesta1respuesta12',
    },
    {
      question: 'pregunta3',
      answer: 'respuesta3',
    },
  ]

  let HTMLFaqs: HTMLElement
  let answers: NodeList

  const handleClick = (event: any) => {
    let selectedAnswer: HTMLElement = event.target.nextElementSibling

    if (selectedAnswer.style.height != '0px') return (selectedAnswer.style.height = '0px')

    answers.forEach((answer: HTMLElement) => (answer.style.height = '0px'))

    selectedAnswer.style.height = selectedAnswer.getAttribute('meta-height') + 'px'
  }

  onMount(() => {
    answers = HTMLFaqs.querySelectorAll('.answer')
    answers.forEach((answer: HTMLElement) => {
      answer.setAttribute('meta-height', answer.offsetHeight.toString())
      answer.style.height = '0px'
    })
  })
</script>

<style lang="scss">
  .faqs {
    height: fit-content;
    width: 100%;
    background-color: var(--colorBackground);
    border-radius: var(--radius);
    border: 1px solid var(--colorBorder);
    border-bottom: 0;

    .pack {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid var(--colorBorder);
      padding: 15px;

      .question {
        transition: 0.3s ease;
        font-weight: bold;
        text-align: left;
        cursor: pointer;

        &:hover {
          transition: 0.3s ease;
          color: var(--colorBrand);
        }
      }

      .answer {
        margin-top: 10px;
        font-weight: lighter;
        font-size: 15px;

        overflow: hidden;
        height: 100%;
        text-align: justify;

        transition: 0.3s ease;
      }
    }
  }
</style>

<div class="faqs" bind:this={HTMLFaqs}>
  {#each faqs as faq}
    <div class="pack">
      <button class="question" on:click={handleClick}>
        {faq.question}
      </button>
      <span class="answer">{faq.answer}</span>
    </div>
  {/each}
</div>
