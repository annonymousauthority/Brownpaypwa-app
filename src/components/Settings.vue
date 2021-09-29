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