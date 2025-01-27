import Joi from "joi";

const schema = Joi.object({
  "first-name": Joi.string().min(1).max(30),
  "last-name": Joi.string().min(2).max(30),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: false },
  }),
  "query-type": Joi.boolean().valid(true),
  message: Joi.string().min(3),
  consent: Joi.boolean().valid(true),
});

export const mainEvents = () => {
  $(document).on("submit", "#contact-form", (e) => {
    e.preventDefault();
    $("#contact-form *").removeClass("error");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const checkbox = $(e.target).find("input[type=checkbox]");
    checkbox.each((_, val) => {
      data[val.name] = val.checked;
    });
    const radio = $(e.target).find("input[type=radio]");
    data["query-type"] = false;
    radio.each((_, val) => {
      if (val.checked) {
        data["query-type"] = true;
        return false;
      }
    });

    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      error.details.forEach((details) => {
        const { path } = details;
        const input = $(`#${path}`);
        const errorMessage = input.siblings(".error-message");
        if (!errorMessage.length) {
          if (path[0] === "query-type") {
            $(".query-type-error").addClass("error");
          }
        }
        input.addClass("error");
        errorMessage.addClass("error");
      });
      return;
    }

    const windowScrollTop = $(window).scrollTop();
    $(".success-message").css({
      display: "flex",
      top: windowScrollTop + 50,
    });
  });
};
