<template>
    <f7-page>
        <f7-navbar>
            <f7-nav-left>
                <img
                    src="/images/Pfadi.svg"
                    style="height:28px; margin: 0px 0 0 16px"
                />
            </f7-nav-left>
            <f7-nav-title>Cudeschin</f7-nav-title>
            <f7-nav-right>
                <!-- Card switch is not really that helpful, remove it -->
                <f7-link @click="toggleDisplay" :icon-material="viewIcon" />
                <f7-link @click="switchLanguage" icon-material="language" />
                <f7-link
                    href="mailto:verbesserungen@pbs.ch?subject=Feedback cudeschin"
                    class="external"
                    icon-material="feedback"
                />
                <f7-link
                    class="searchbar-enable"
                    data-searchbar=".article-search"
                    icon-material="search"
                />
            </f7-nav-right>
            <f7-searchbar
                expandable
                class="article-search"
                @searchbar:enable="searchbarEnabled"
                search-container=".article-list"
                search-in=".source-text"
            ></f7-searchbar>
        </f7-navbar>

        <article-cards v-show="!listActive" :articles="articles.all" />
        <article-list v-show="listActive" :articles="articles.all" />
        <f7-list class="searchbar-not-found">
            <f7-list-item title="Leider nichts gefunden"></f7-list-item>
        </f7-list>
        <f7-actions ref="langSwitch">
            <f7-actions-group>
                <f7-actions-button
                    :bold="articles.lang === 'de'"
                    @click="articles.activate('de')"
                >
                    Deutsch
                </f7-actions-button>
                <f7-actions-button
                    :bold="articles.lang === 'fr'"
                    @click="articles.activate('fr')"
                >
                    Français
                </f7-actions-button>
                <f7-actions-button
                    :bold="articles.lang === 'it'"
                    @click="articles.activate('it')"
                >
                    Italiano
                </f7-actions-button>
            </f7-actions-group>
        </f7-actions>
    </f7-page>
</template>

<script>
import articles from '@/store';

export default {
    data: function() {
        return {
            listActive: true,
            articles
        };
    },
    computed: {
        viewIcon: function() {
            return this.listActive ? 'view_stream' : 'view_headline';
        }
    },
    methods: {
        toggleDisplay: function(event) {
            this.listActive = !this.listActive;
        },
        searchbarEnabled: function(event) {
            this.listActive = true;
        },
        switchLanguage: function(event) {
            this.$refs.langSwitch.open();
        }
    }
};
</script>
