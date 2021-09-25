<template>
  <div class="col-span-6">
    <div class="flex flex-wrap">
      <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center text-black">
            <router-link to="/dashboard/settings" exact-active-class="current">
              <a
                class="
                  text-xs
                  font-bold
                  uppercase
                  px-5
                  py-3
                  shadow-lg
                  rounded
                  block
                  leading-normal
                "
              >
                Profile
              </a>
            </router-link>
          </li>

          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center text-black">
            <router-link
              to="/dashboard/settings/security"
              active-class="current"
            >
              <a
                class="
                  text-xs
                  font-bold
                  uppercase
                  px-5
                  py-3
                  shadow-lg
                  rounded
                  block
                  leading-normal
                "
              >
                Security
              </a>
            </router-link>
          </li>

          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center text-black">
            <router-link
              to="/dashboard/settings/wallet_addresses"
              active-class="current"
            >
              <a
                class="
                  text-xs
                  font-bold
                  uppercase
                  px-5
                  py-3
                  shadow-lg
                  rounded
                  block
                  leading-normal
                "
              >
                Wallet & Addresses
              </a>
            </router-link>
          </li>

          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center text-black">
            <router-link to="/dashboard/setttings/bank_account">
              <a
                class="
                  text-xs
                  font-bold
                  uppercase
                  px-5
                  py-3
                  shadow-lg
                  rounded
                  block
                  leading-normal
                "
              >
                Bank Account
              </a>
            </router-link>
          </li>
        </ul>
        <!-- <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <p>
                Collaboratively administrate empowered markets via
                plug-and-play networks. Dynamically procrastinate B2C users
                after installed base benefits.
                <br />
                <br />
                Dramatically visualize customer directed convergence
                without revolutionary ROI.
              </p>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <p>
                Completely synergize resource taxing relationships via
                premier niche markets. Professionally cultivate one-to-one
                customer service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <p>
                Efficiently unleash cross-media information without
                cross-media value. Quickly maximize timely deliverables for
                real-time schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions
                without functional solutions.
              </p>
            </div>
          </div>
        </div>
      </div> -->
      </div>
    </div>
    <div class="col-span-6">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "indigo-tabs",
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>