<script lang="ts">
  interface IFaq {
    question: string
    answer: string
    category: string
  }

  export let faqsCategories: IFaq[] = []

  export let activeCategory: string = ''

  const categories: Set<string> = new Set()

  faqsCategories.map((faq: IFaq) => categories.add(faq.category))

  const addCategory = (category) => {
    if (activeCategory === category) {
      activeCategory = ''
      return
    }

    activeCategory = category
  }
</script>

<style lang="scss">
  @import '../../sass/mixins.scss';

  .faqs-category {
    display: flex;
    width: 100%;
    max-width: 700px;
    border: 1px solid var(--colorBorder);
    border-radius: var(--radius);

    @include notDesktop {
      flex-direction: column;

      .categories {
        border-right: unset !important;
        border-bottom: 1px solid var(--colorBorder);

        .tags {
          flex-direction: row !important;
          justify-content: space-evenly !important;
          gap: 20px;
        }
      }
    }

    .categories {
      padding: 20px;
      border-right: 1px solid var(--colorBorder);

      .tags {
        position: sticky;
        top: 70px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 0px 10px;

        .category {
          padding: 10px 0;

          &.active {
            color: var(--colorBrand);
          }
        }
      }
    }

    .faqs {
      width: 100%;

      .faq {
        transition: 0.3s ease;
        padding: 20px;
        overflow: hidden;
        opacity: 0.3;

        &.active {
          transition: 0.3s ease;
          opacity: 1;
        }

        .question {
          font-size: 20px;
          padding: 10px 0;
          text-align: left;
          color: var(--colorBrand);
        }

        .answer {
          color: var(--colorText2);
          font-size: 14px;
        }
      }
    }
  }
</style>

<div class="faqs-category">
  <div class="categories">
    <div class="tags">
      {#each categories as category}
        <button class="category" class:active={activeCategory === category} on:click={() => addCategory(category)}>
          {category}
        </button>
      {/each}
    </div>
  </div>

  <div class="faqs">
    {#each faqsCategories as faqsCategory}
      <div class="faq" class:active={activeCategory === faqsCategory.category || !activeCategory}>
        <h3 class="question">{faqsCategory.question}</h3>
        <div class="answer">{faqsCategory.answer}</div>
      </div>
    {/each}
  </div>
</div>
