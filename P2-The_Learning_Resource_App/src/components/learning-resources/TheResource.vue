<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResourcesMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="AddResourceMode">Add Resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.Js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Leran to google...',
          link: 'https://google.com',
        },
      ],
    };
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  computed: {
    storedResourcesMode(){
        return this.selectedTab === "stored-resources" ? null: "flat";
    },
    AddResourceMode(){
        return this.selectedTab === "add-resource" ? null: "flat";
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link){
        console.log("Recieved Data")
        const newResource = {
            id: new Date().toISOString(),
            title: title,
            description: description,
            link: link
        }
        this.storedResources.unshift(newResource)
        this.selectedTab = 'stored-resources'
    },
    removeResource(res_id){
        const resIndex = this.storedResources.findIndex(res => res.id === res_id)
        this.storedResources.splice(resIndex, 1)
    }
  },
};
</script>