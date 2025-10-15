// components/landing/Pricing.js
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const plan = {
  name: "Plano Vitalício",
  price: "R$ 199",
  isMostPopular: true,
  description: "Acesso completo e ilimitado a todos os recursos da plataforma, para sempre. Pague uma vez e transforme a gestão do seu negocio",
  features: [
    "Usuários ilimitados",
    "Perfis ilimitados",
    "Lançamentos ilimitados via WhatsApp",
    "Análise inteligente (IA) de comprovantes",
    "Dashboard avançado com filtros e metas",
    "Exportação de dados (XLSX)",
    "Suporte prioritário via WhatsApp",
    "Acesso a todas as futuras atualizações",
  ],
  cta: "Garantir Acesso Vitalício",
  href: "https://pay.hotmart.com/J102305237H" // SEU LINK DE PAGAMENTO ÚNICO
};

const faqs = [
    { question: "Preciso de um aplicativo para usar o sistema?", answer: "Não! A grande vantagem do Kontrolly é que toda a interação da sua equipe de campo é feita diretamente pelo WhatsApp, um aplicativo que todos já usam. O gestor acessa o dashboard completo pelo navegador de qualquer dispositivo." },
    { question: "Como funciona o pagamento?", answer: "O pagamento é único, realizado de forma segura através da Hotmart. Você paga apenas uma vez e tem acesso vitalício a todos os recursos e futuras atualizações do sistema, sem mensalidades ou taxas escondidas." },
    { question: "A IA entende qualquer tipo de áudio ou comprovante?", answer: "Nossa IA é treinada para entender português brasileiro com diferentes sotaques e para reconhecer os formatos mais comuns de notas fiscais e comprovantes. A precisão é altíssima, mas caso algo não seja identificado, o sistema notifica para uma revisão manual rápida." },
    { question: "Meus dados estão seguros?", answer: "Sim. Levamos a segurança muito a sério. Seus dados são criptografados e armazenados em servidores seguros, seguindo as melhores práticas de mercado." }
];


export function Pricing() {
  return (
    <section id="precos" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Acesso Vitalício por um Preço Único
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Chega de mensalidades. Invista uma única vez e tenha acesso para sempre a uma ferramenta completa para a gestão de custos dos seus projetos.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
            <div className={cn('relative p-8 rounded-2xl shadow-lg border flex flex-col max-w-lg', 'border-blue-500 bg-white dark:bg-gray-900')}>
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold tracking-wider text-white bg-blue-600">
                      OFERTA ESPECIAL
                  </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300 flex-grow">{plan.description}</p>
              
              <div className="mt-6">
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                <span className="text-lg font-medium text-gray-500 dark:text-gray-400"> pagamento único</span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-6 w-6 text-blue-500 shrink-0 mr-3 mt-1" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full mt-10" asChild>
                <Link href={plan.href}>{plan.cta} <Sparkles className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Dúvidas Frequentes</h3>
            <div className="mt-8 space-y-4">
                {faqs.map((faq, index) => (
                    <details key={index} className="group p-6 rounded-lg bg-white dark:bg-gray-800/50 shadow-sm cursor-pointer">
                        <summary className="flex items-center justify-between font-semibold text-gray-800 dark:text-white">
                            {faq.question}
                            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                        </p>
                    </details>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}