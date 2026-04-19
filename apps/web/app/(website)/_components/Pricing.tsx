"use client";

import { Button } from "@metallicjs/ui/components/button";

import CheckIcon from "@/public/assets/website/black-check-icon.svg";

const Pricing = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 lg:gap-4 text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Pricing</h1>
        <p className="text-sm sm:text-base font-medium text-muted-foreground">
          Open-source and free forever. Cloud plans for teams that want us to handle everything.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
          <div className="flex items-stretch justify-center">
            <div className="w-full p-3 rounded-md bg-background dark:bg-sidebar-border">
              <div className="flex flex-col gap-2 p-5 md:p-4 lg:p-6 bg-card rounded-md dark:border-muted-foreground border-[0.5px] h-full">
                <div className="border-b flex flex-col gap-4 pb-6 w-full">
                  <p className="font-medium md:text-lg">Open Source</p>
                  <h4 className="font-bold text-2xl md:text-3xl flex items-center gap-1">
                    Free
                  </h4>
                </div>
                <div className="text-muted-foreground text-sm pb-2">
                  Self-hosted. AGPL-3.0. Full data ownership.
                </div>
                <div className="flex flex-col gap-8 w-full flex-1">
                  <Button
                    className="w-full bg-card dark:bg-sidebar-border"
                    variant={"outline"}
                    asChild
                  >
                    <a href="https://github.com/usagely/usagely">Self-Host Free</a>
                  </Button>
                  <div className="flex flex-col gap-3 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Unlimited users, tools, organizations</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Dashboard, budgets, anomalies</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>All AI provider integrations</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Shadow AI detection</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Savings recommendations</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Community support (Discord)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-stretch justify-center">
            <div className="w-full p-3 rounded-md bg-background dark:bg-sidebar-border">
              <div className="flex flex-col gap-2 p-5 md:p-4 lg:p-6 bg-card rounded-md dark:border-muted-foreground border-[0.5px] h-full">
                <div className="border-b flex flex-col gap-4 pb-6 w-full">
                  <p className="font-medium md:text-lg">Starter</p>
                  <h4 className="font-bold text-2xl md:text-3xl flex items-center gap-1">
                    $49
                    <span className="text-base font-medium text-muted-foreground">
                      /mo
                    </span>
                  </h4>
                </div>
                <div className="text-muted-foreground text-sm pb-2">
                  Small teams. Managed hosting. No DevOps.
                </div>
                <div className="flex flex-col gap-8 w-full flex-1">
                  <Button className="w-full">
                    Start Free Trial
                  </Button>
                  <div className="flex flex-col gap-3 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Everything in Open Source</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Up to 15 users</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Managed hosting & backups</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Automated integration sync</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Email alerts for anomalies</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Email support (48h)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-stretch justify-center">
            <div className="w-full p-2 pt-5 rounded-md bg-[linear-gradient(179.56deg,var(--primary-100)_0.38%,var(--primary-700)_213.76%)] relative">
              <span className="absolute -top-3 -right-12 -translate-x-1/2 bg-primary-400 text-white text-xs px-3 py-1 rounded-full">
                🔥 Popular
              </span>
              <div className="flex flex-col gap-2 p-5 md:p-4 lg:p-6 bg-card dark:bg-sidebar-border rounded-md border-[0.5px] border-primary-700 h-full">
                <div className="border-b flex flex-col gap-4 pb-6 w-full">
                  <p className="font-medium md:text-lg">Growth</p>
                  <h4 className="font-bold text-2xl md:text-3xl flex items-center gap-1">
                    $149
                    <span className="text-base font-medium text-muted-foreground">
                      /mo
                    </span>
                  </h4>
                </div>
                <div className="text-muted-foreground text-sm pb-2">
                  Growing teams with real AI budgets.
                </div>
                <div className="flex flex-col gap-8 w-full flex-1">
                  <Button className="w-full">
                    Start Free Trial
                  </Button>
                  <div className="flex flex-col gap-3 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Everything in Starter</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Up to 100 users</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Slack + webhook alerts</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>CSV/PDF exports</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Basic RBAC (admin/viewer)</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Priority support (24h)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-stretch justify-center">
            <div className="w-full p-3 rounded-md bg-background dark:bg-sidebar-border">
              <div className="flex flex-col gap-2 p-5 md:p-4 lg:p-6 bg-card rounded-md dark:border-muted-foreground border-[0.5px] h-full">
                <div className="border-b flex flex-col gap-4 pb-6 w-full">
                  <p className="font-medium md:text-lg">Enterprise</p>
                  <h4 className="font-bold text-2xl md:text-3xl flex items-center gap-1">
                    Custom
                  </h4>
                </div>
                <div className="text-muted-foreground text-sm pb-2">
                  Large orgs with compliance needs.
                </div>
                <div className="flex flex-col gap-8 w-full flex-1">
                  <Button
                    className="w-full bg-card dark:bg-sidebar-border"
                    variant={"outline"}
                    asChild
                  >
                    <a href="mailto:enterprise@usagely.io">Contact Sales</a>
                  </Button>
                  <div className="flex flex-col gap-3 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Everything in Growth</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Unlimited users & orgs</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>SSO / SAML (Okta, Google, Azure)</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Full RBAC + audit logs</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Custom integrations</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>99.9% SLA + dedicated support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
