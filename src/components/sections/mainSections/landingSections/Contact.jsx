import { Container, SectionTitle, SendEmailForm } from "../../../../components/index";
import { useSendContactEmailMutation } from "../../../../redux/api/contactApi";

const Contact = ({ contactData, name }) => {
  const [sendContactEmail, { isLoading, error, isSuccess }] = useSendContactEmailMutation();
  const handleSendContactEmail = async (data) => {
      try {
          await sendContactEmail(data).unwrap();
      } catch(err) {
          console.log("ERROR_SEND_CONTACT_EMAIL: ", err)
      }
  };
  return (
    <div name={name} className="bg-body border-t border-border py-10 min-h-screen">
    <Container className="w-full h-full">
      <SectionTitle title={contactData.title} />
        <p className="w-full max-w-xl text-base font-semibold leading-7 text-subtitle mb-12">
           {contactData.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-2 border border-border bg-form rounded-2xl px-5 py-8 shadow-md hover:shadow-lg
            transition-shadow duration-300 ease-in-out">
              <SendEmailForm 
                onSubmitCallback={handleSendContactEmail} 
                isLoading={isLoading} 
                error={error?.data?.message}
                isSuccess={isSuccess}
                formData={contactData.form} 
              />
            </div>
            {/* Info contact */}
            <div className="lg:col-span-3 bg-elevated/30 border border-border min-h-100 rounded-2xl px-5 py-8 shadow-md
            hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-semibold text-title">{contactData.info.title}</h3>
                <p className="text-sm text-subtitle font-medium leading-relaxed max-w-xl">{contactData.info.description}</p>
              </div>
              <div className="flex flex-col gap-6">
                {/* What i do */}
                <div className="pb-6">
                  <h4 className="font-semibold text-title text-base mb-4">{contactData.info.whatDo.title}</h4>
                  <div className="flex flex-col gap-3">
                    {contactData.info.whatDo.items.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <Icon size={18} className="text-primary/80" />
                          <p className="text-sm text-muted">{item.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* Location */}
                <div className="py-6 border-t border-dashed border-border">
                  <h4 className="font-semibold text-title text-base mb-4">{contactData.info.location.title}</h4>
                  <div className="flex flex-col gap-3">
                    {contactData.info.location.items.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <Icon size={18} className="text-primary/80" />
                          <p className="text-sm text-muted">{item.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* contact links */}
                <div className="py-6 border-t border-dashed border-border">
                  <h4 className="font-semibold text-title text-base mb-4">{contactData.info.contactInfo.title}</h4>
                  <div className="flex flex-col gap-3">
                    {contactData.info.contactInfo.items.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <a 
                          key={index} 
                          className="group flex items-center gap-2 w-fit"
                          href={item.href}
                          target={item.target}
                          rel={item.rel}
                        >
                          <Icon 
                            size={18} 
                            className={`text-primary/80 
                            group-hover:text-primary transition-colors duration-200
                            ${item.isRotateIconRTL ? "rotate-270" : ""}`} 
                          />
                          <p className="text-sm text-muted group-hover:text-title/90 transition-colors duration-200">
                            {item.label}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
        </div>
    </Container>
    </div>
  )
}

export default Contact