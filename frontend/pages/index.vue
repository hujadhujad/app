<template>
  <div class="WPage WPage--bg-white">
    <template
      v-for="(section, index) in homepage.sections"
    >
      <!-- Hero -->
      <WHero
        v-if="section.__typename === 'ComponentHeroHero'"
        :key="index"
      />
      <!-- Sections -->
      <template
        v-else
      >
        <WSectionTextPhoto
          v-if="section.__typename === 'ComponentSectionsSection'"
          id="about"
          :key="index"
          :section="section"
        />
        <WSectionArticles
          v-else-if="section.__typename === 'ComponentSectionsSectionArticles'"
          :key="index"
          :section="section"
        />
        <WSectionFaq
          v-else-if="section.__typename === 'ComponentSectionsSectionFaq'"
          id="faq"
          :key="index"
          :section="section"
        />
        <WSectionFeatures
          v-else-if="section.__typename === 'ComponentSectionsSectionFeatures'"
          id="work"
          :key="index"
          :section="section"
        />
        <WSectionPhotoGrid
          v-else-if="section.__typename === 'ComponentSectionsSectionPhotoGrid'"
          :key="index"
          :section="section"
        />
        <WSectionPlans
          v-else-if="section.__typename === 'ComponentSectionsSectionPlans'"
          id="pricing"
          :key="index"
          :section="section"
        />
      </template>
    </template>
  </div>
</template>

<script>
import homepageQuery from '@/apollo/queries/homepage/homepage'
export default {
  name: 'WPageHomepage',
  data () {
    return {
      homepage: {}
    }
  },
  apollo: {
    homepage: {
      prefetch: true,
      query: homepageQuery
    }
  }
}
</script>
