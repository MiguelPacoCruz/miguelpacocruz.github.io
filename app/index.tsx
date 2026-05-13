import { Feather } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import Head from 'expo-router/head';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import {
  ActionLink,
  ExternalAction,
  Page,
  SectionTitle,
  SkillIconCloud,
  SkillPanel,
  TimelineItem,
  colors,
} from '@/components/PortfolioShell';
import { profile } from '@/data/profile';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const compact = width < 880;

  return (
    <>
      <Stack.Screen options={{ title: 'Miguel Cruz | Portefólio' }} />
      <Head>
        <title>Miguel Cruz | Portefólio</title>
        <meta
          name="description"
          content="Portefólio técnico de Miguel Cruz, estudante de Ciências da Computação na Universidade do Minho."
        />
      </Head>
      <Page>
      <View style={[homeStyles.hero, compact && homeStyles.heroCompact]}>
        <View style={homeStyles.heroCopy}>
          <Text style={homeStyles.kicker}>Portefólio</Text>
          <Text style={[homeStyles.heroTitle, compact && homeStyles.heroTitleCompact]}>
            Software prático, interfaces limpas e decisões técnicas bem fundamentadas.
          </Text>
          <Text style={homeStyles.heroText}>{profile.summary}</Text>
          <View style={homeStyles.actionRow}>
            <ActionLink href="/cv" icon="file-text" label="Ver CV" />
            <ExternalAction icon="github" label="GitHub" url={profile.github} />
          </View>
        </View>

        <View style={[homeStyles.heroVisual, compact && homeStyles.heroVisualCompact]}>
          <View style={homeStyles.statRail}>
            <View>
              <Text style={[homeStyles.statNumber, compact && homeStyles.statNumberCompact]}>
                5
              </Text>
              <Text style={homeStyles.statLabel}>
                anos de desenvolvimento autodidata
              </Text>
            </View>
            <View style={homeStyles.statDivider} />
            <View style={homeStyles.statMiniGrid}>
              <MiniStat value="C2" label="Inglês" />
              <MiniStat value="EQF 6" label="Licenciatura" />
            </View>
          </View>
          <SkillIconCloud />
        </View>
      </View>

      <View style={homeStyles.section}>
        <SectionTitle
          eyebrow="Agora"
          title="Estudante de Ciências da Computação na Universidade do Minho."
          body="O foco está em construir produto de ponta a ponta: frontend responsivo, backend com bases de dados sólidas e uma arquitetura simples de manter."
        />

        <View style={homeStyles.featureGrid}>
          <Feature
            icon="database"
            title="Bases de dados"
            text="SQL, MySQL, SQL Server e PostgreSQL via Supabase."
          />
          <Feature
            icon="code"
            title="Full-stack"
            text="Interfaces web, autenticação, RLS, dashboards e fluxos administrativos."
          />
          <Feature
            icon="users"
            title="Coordenação"
            text="Organização de equipas técnicas e acompanhamento de projetos internos do NECC."
          />
        </View>
      </View>

      <View style={homeStyles.section}>
        <SectionTitle
          eyebrow="Em destaque"
          title="SNecc Bar e coordenação técnica."
        />
        <View style={homeStyles.timelineStack}>
          <TimelineItem
            title={profile.project.title}
            subtitle={profile.project.subtitle}
            items={profile.project.bullets.slice(0, 3)}
          />
          <TimelineItem
            title={profile.experience[0].title}
            subtitle={`${profile.experience[0].organization} - ${profile.experience[0].place}`}
            period={profile.experience[0].period}
            items={profile.experience[0].bullets.slice(0, 3)}
          />
        </View>
      </View>

      <View style={homeStyles.section}>
        <SectionTitle eyebrow="Tecnologias" title="Competências principais." />
        <View style={homeStyles.skillGrid}>
          <SkillPanel
            icon="terminal"
            title="Linguagens"
            values={profile.skills.languages}
          />
          <SkillPanel icon="tool" title="Ferramentas" values={profile.skills.tools} />
          <SkillPanel
            icon="hard-drive"
            title="Bases de Dados"
            values={profile.skills.databases}
          />
          <SkillPanel
            icon="message-circle"
            title="Línguas"
            values={profile.skills.languagesSpoken}
          />
        </View>
      </View>
      </Page>
    </>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <View style={homeStyles.miniStat}>
      <Text style={homeStyles.miniStatValue}>{value}</Text>
      <Text style={homeStyles.miniStatLabel}>{label}</Text>
    </View>
  );
}

function Feature({
  icon,
  text,
  title,
}: {
  icon: keyof typeof Feather.glyphMap;
  text: string;
  title: string;
}) {
  return (
    <View style={homeStyles.feature}>
      <View style={homeStyles.featureIcon}>
        <Feather name={icon} size={19} color={colors.ink} />
      </View>
      <Text style={homeStyles.featureTitle}>{title}</Text>
      <Text style={homeStyles.featureText}>{text}</Text>
    </View>
  );
}

const homeStyles = StyleSheet.create({
  hero: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 40,
    minHeight: 520,
  },
  heroCompact: {
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
  },
  heroCopy: {
    flex: 1,
    gap: 18,
    minWidth: 280,
  },
  kicker: {
    color: colors.coral,
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: colors.text,
    fontSize: 56,
    fontWeight: '900',
    lineHeight: 60,
    maxWidth: 680,
  },
  heroTitleCompact: {
    fontSize: 40,
    lineHeight: 44,
  },
  heroText: {
    color: colors.muted,
    fontSize: 18,
    lineHeight: 29,
    maxWidth: 640,
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 6,
  },
  heroVisual: {
    borderLeftColor: colors.line,
    borderLeftWidth: 1,
    flex: 0.78,
    gap: 22,
    minWidth: 300,
    paddingLeft: 32,
  },
  heroVisualCompact: {
    borderLeftWidth: 0,
    minWidth: 0,
    paddingLeft: 0,
  },
  statRail: {
    backgroundColor: colors.surfaceStrong,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    padding: 22,
  },
  statNumber: {
    color: colors.amber,
    fontSize: 96,
    fontWeight: '900',
    lineHeight: 98,
  },
  statNumberCompact: {
    fontSize: 72,
    lineHeight: 74,
  },
  statLabel: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '800',
    lineHeight: 25,
    maxWidth: 260,
  },
  statDivider: {
    backgroundColor: colors.line,
    height: 1,
    marginVertical: 18,
  },
  statMiniGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  miniStat: {
    flex: 1,
  },
  miniStatValue: {
    color: colors.green,
    fontSize: 24,
    fontWeight: '900',
  },
  miniStatLabel: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 4,
  },
  section: {
    gap: 24,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },
  feature: {
    backgroundColor: colors.surface,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    gap: 12,
    minWidth: 240,
    padding: 18,
  },
  featureIcon: {
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 8,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  featureTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  featureText: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 23,
  },
  timelineStack: {
    gap: 24,
  },
  skillGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },
});
