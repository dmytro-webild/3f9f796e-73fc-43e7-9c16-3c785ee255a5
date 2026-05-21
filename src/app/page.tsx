"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Flame, ChefHat, Sparkles, Calendar, Linkedin, Globe } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="floatingGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="たまご亭"
          navItems={[
            { name: "こだわり", id: "about" },
            { name: "メニュー", id: "cuts" },
            { name: "特徴", id: "experience" },
            { name: "職人", id: "team" },
            { name: "お客様の声", id: "testimonials" },
            { name: "お問い合わせ", id: "contact" }
          ]}
          button={{
            text: "ご予約",            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="究極の親子丼、ここに極まる"
          description="濃厚なこだわり卵と、厳選された地鶏のハーモニー。職人が一杯ずつ丁寧に仕上げる、とろとろの食感と出汁の香りが広がる至福の親子丼をご賞味ください。"
          tag="行列のできる名店"
          tagIcon={Flame}
          background={{ variant: "plain" }}
          buttons={[
            { text: "メニューを見る", href: "cuts" },
            { text: "予約する", href: "contact" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/spoon-pouring-seasoning-food_23-2148771248.jpg", imageAlt: "とろとろの親子丼" },
            { imageSrc: "http://img.b2bpic.net/free-photo/lot-fresh-chicken-white-eggs-orange-plate-high-quality-photo_114579-68990.jpg", imageAlt: "新鮮なこだわり卵" },
            { imageSrc: "http://img.b2bpic.net/free-photo/professional-chef-wear-black-making-sushi-rolls-restaurant-kitchen-japanese-traditional-food_627829-6718.jpg", imageAlt: "職人の調理風景" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="たまご亭の矜持"
          tagIcon={ChefHat}
          title="一杯に込めた情熱"
          description="創業から継ぎ足された特製出汁と、生産者直送の濃厚卵。たまご亭では、素材本来の旨味を最大限に引き出すため、厳選した地鶏のみを使用しています。一口食べればわかる、深い味わいの理由がそこにあります。"
          metrics={[
            { value: "厳選", title: "こだわり地鶏" },
            { value: "濃厚", title: "特選卵" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/delicious-meal-with-sambal-arrangement_23-2149076077.jpg"
          imageAlt="丁寧に調理された親子丼"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="cuts" data-section="cuts">
        <ProductCardTwo
          title="厳選メニュー"
          description="基本の親子丼から季節の限定メニューまで、心ゆくまでお楽しみください。"
          tag="Signature Dishes"
          tagIcon={Sparkles}
          products={[
            { id: "1", brand: "たまご亭", name: "極・究極親子丼", price: "1,200円", rating: 5, reviewCount: "450", imageSrc: "http://img.b2bpic.net/free-photo/korean-food-gyeran-jjim-poached-egg_1150-42827.jpg" },
            { id: "2", brand: "たまご亭", name: "炭火焼き鶏親子丼", price: "1,450円", rating: 5, reviewCount: "320", imageSrc: "http://img.b2bpic.net/free-photo/chicken-dish-restaurant-table_7939-2128.jpg" },
            { id: "3", brand: "たまご亭", name: "季節の特選親子丼", price: "1,600円", rating: 4, reviewCount: "210", imageSrc: "http://img.b2bpic.net/free-photo/homemade-ramen-soup-with-half-egg_23-2148494832.jpg" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="experience" data-section="experience">
        <FeatureCardNineteen
          title="たまご亭の体験"
          description="ただの親子丼ではない、五感で楽しむ食のひととき。"
          tag="お食事のこだわり"
          features={[
            { tag: "素材", title: "産地直送の卵", subtitle: "濃厚なコク", description: "箸で持ち上げられるほど濃厚な卵をたっぷり使用しています。", imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-fresh-chicken-quail-eggs-basket_181624-60348.jpg" },
            { tag: "技", title: "職人の火入れ", subtitle: "絶妙なとろとろ感", description: "数秒の差で決まる、職人だけができる火加減の調節。", imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-cook-breaking-eggs-dough-dark-pastry-job-cake-pies-bakery-worker-cuisine_179666-43808.jpg" },
            { tag: "出汁", title: "秘伝の黄金出汁", subtitle: "奥深い旨味", description: "昆布と鰹を贅沢に使用した、コクのある黄金出汁。", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-with-matcha-tea_23-2150163582.jpg" }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="厨房の精鋭たち"
          description="素材のポテンシャルを引き出す、熟練の料理人集団です。"
          tag="料理人の紹介"
          members={[
            { id: "1", name: "田中 健一", role: "総料理長", description: "親子丼一筋20年。卵と鶏の最も美味しい瞬間を追求し続けています。", imageSrc: "http://img.b2bpic.net/free-photo/person-practicing-tai-chi-indoors_23-2150478922.jpg", socialLinks: [{ icon: Linkedin, url: "#" }] },
            { id: "2", name: "佐藤 美咲", role: "副料理長", description: "繊細な火入れと盛り付けに定評のある職人。お客様の笑顔を一番の糧としています。", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-professional-chef-posing_23-2151232172.jpg", socialLinks: [{ icon: Linkedin, url: "#" }] }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="お客様の声"
          description="多くの方々に愛される、たまご亭の味をご体験ください。"
          tag="Testimonials"
          testimonials={[
            { id: "1", name: "山田太郎", handle: "@foodie_yamada", testimonial: "これまでの親子丼の概念が覆されました。卵のトロトロ加減が本当に最高です。", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-trying-food_23-2149008717.jpg" },
            { id: "2", name: "鈴木花子", handle: "@lunch_walker", testimonial: "出汁の香りが店内に広がっていて、入った瞬間から食欲がそそられます。", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-salad-cafe_1303-25277.jpg" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="よくあるご質問"
          description="ご来店前にご確認ください"
          tag="FAQ"
          faqs={[
            { id: "1", title: "予約はできますか？", content: "はい、オンラインまたはお電話にて承っております。" },
            { id: "2", title: "テイクアウトはありますか？", content: "はい、一部メニューにてテイクアウト対応しております。" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/wine-glass-table-setting_74190-4678.jpg"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="店舗情報"
          title="ご予約・お問い合わせ"
          description="お席のご予約や、貸切のご相談などお気軽にお問い合わせください。"
          tagIcon={Calendar}
          background={{ variant: "sparkles-gradient" }}
          inputPlaceholder="メールアドレス"
          buttonText="予約送信"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="たまご亭"
          copyrightText="© 2025 たまご亭 All rights reserved."
          columns={[
            { title: "店舗", items: [{ label: "メニュー", href: "#" }, { label: "アクセス", href: "#" }] },
            { title: "サポート", items: [{ label: "お問い合わせ", href: "#" }, { label: "採用情報", href: "#" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
