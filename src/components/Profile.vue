<template>
  <div class="col-span-6">
    <div class="main-content">
      <div class="2xl:w-screen-full">
        <div class="col-span-6 order-xl-1">
          <div class="card bg-secondary shadow">
            <div class="card-header bg-secondary border-0">
              <div class="row align-items-center">
                <div class="col-8 mx-auto">
                  <img
                    class="
                      object-cover
                      w-44
                      h-44
                      mx-2
                      rounded-full
                      mt-5
                      ml-auto
                      mr-auto
                    "
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt="avatar"
                  /><br />
                  <button
                    class="
                      border 
                      btn
                      text-black
                      py-1
                      px-6
                      mb-0
                      lg:mb-3
                      xl:mb-3
                    "
                  >
                    Upload Photo
                  </button>
                  <button
                    class="
                      border border-yellow-200
                      text-black
                      mx-4
                      py-1
                      px-6
                      mb-0
                      lg:mb-3
                      xl:mb-3
                    "
                  >
                   Remove
                  </button>
                </div>
                
              </div>
            </div>
            <div class="card-body ">
              <form>
                <h6 class="heading-small text-muted mb-4">User information</h6>
                <div class="pl-lg-4">
                      <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-first-name"
                          >First name</label
                        >
                        <input
                          type="text"
                          id="input-first-name"
                          class="form-control form-control-alternative"
                          placeholder="First name"
                          value="Lucky"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-last-name"
                          >Last name</label
                        >
                        <input
                          type="text"
                          id="input-last-name"
                          class="form-control form-control-alternative"
                          placeholder="Last name"
                          value="Jesse"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-username"
                          >Username</label
                        >
                        <input
                          type="text"
                          id="input-username"
                          class="form-control form-control-alternative"
                          placeholder="Username"
                          value="lucky.jesse"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email"
                          >Email address</label
                        >
                        <input
                          type="email"
                          id="input-email"
                          class="form-control form-control-alternative"
                          placeholder="jesse@example.com"
                        />
                      </div>
                    </div>
                  </div>
              
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">
                  Contact information
                </h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-address"
                          >Address</label
                        >
                        <input
                          id="input-address"
                          class="form-control form-control-alternative"
                          placeholder="Home Address"
                          value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-city"
                          >City</label
                        >
                        <input
                          type="text"
                          id="input-city"
                          class="form-control form-control-alternative"
                          placeholder="City"
                          value="New York"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-country"
                          >Country</label
                        >
                        <input
                          type="text"
                          id="input-country"
                          class="form-control form-control-alternative"
                          placeholder="Country"
                          value="United States"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-country"
                          >Postal code</label
                        >
                        <input
                          type="number"
                          id="input-postal-code"
                          class="form-control form-control-alternative"
                          placeholder="Postal code"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>

               <button
                    class="
                      border 
                      btn
                      text-black
                      mx-4
                      py-1
                      px-6
                      mb-0
                      lg:mb-3
                      xl:mb-3
                    "
                  >
                   Save
                  </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="flex flex-wrap overflow-hidden lg:-mx-5 xl:-mx-6">
      <div
        class="
          w-full
          overflow-hidden
          lg:my-5
          lg:px-18
          lg:w-1/2
          xl:my-6
          xl:px-6
          xl:w-1/2
          mx-auto
        "
      >
        <img
          class="
            object-cover
            w-64
            h-64
            mx-2
            rounded-full
            mt-5
            ml-0
            xl:ml-28
            2xl:ml-36
          "
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
        /><br />
        <button
          class="
            border border-yellow-200
            text-black
            py-1
            px-6
            mb-0
            lg:mb-3
            xl:mb-3
          "
        >
          Upload Photo
        </button>
        <div class="wrapper mt-5">
          <fieldset class="formRow">
            <div class="formRow--item">
              <label
                for="firstname"
                class="formRow--input-wrapper js-inputWrapper"
              >
                <input
                  type="text"
                  class="formRow--input js-input"
                  id="firstname"
                  placeholder="First name"
                />
              </label>
            </div>
          </fieldset>
        </div>
      </div>

      <div
        class="
          w-full
          overflow-hidden
          lg:my-5
          lg:px-5
          lg:w-1/2
          xl:my-6
          xl:px-6
          xl:w-1/2
        "
      >
        <div class="wrapper mt-5">
          <fieldset class="formRow">
            <div class="formRow--item">
              <label
                for="firstname"
                class="formRow--input-wrapper js-inputWrapper"
              >
                <input
                  type="text"
                  class="formRow--input js-input"
                  id="firstname"
                  placeholder="First name"
                />
              </label>
            </div>
          </fieldset>
        </div>
        <div class="wrapper mt-5">
          <fieldset class="formRow">
            <div class="formRow--item">
              <label
                for="firstname"
                class="formRow--input-wrapper js-inputWrapper"
              >
                <input
                  type="text"
                  class="formRow--input js-input"
                  id="firstname"
                  placeholder="First name"
                />
              </label>
            </div>
          </fieldset>
        </div>

      </div>
    </div> -->
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    var $inputItem = $(".js-inputWrapper");
    $inputItem.length &&
      $inputItem.each(function () {
        var $this = $(this),
          $input = $this.find(".formRow--input"),
          placeholderTxt = $input.attr("placeholder"),
          $placeholder;

        $input.after('<span class="placeholder">' + placeholderTxt + "</span>"),
          $input.attr("placeholder", ""),
          ($placeholder = $this.find(".placeholder")),
          $input.val().length
            ? $this.addClass("active")
            : $this.removeClass("active"),
          $input
            .on("focusout", function () {
              $input.val().length
                ? $this.addClass("active")
                : $this.removeClass("active");
            })
            .on("focus", function () {
              $this.addClass("active");
            });
      });
  },
};
</script>
