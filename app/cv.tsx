import { Stack } from 'expo-router';
import Head from 'expo-router/head';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import {
  ActionLink,
  BulletList,
  ExternalAction,
  Page,
  SectionTitle,
  SkillPanel,
  TimelineItem,
  colors,
} from '@/components/PortfolioShell';
import { profile } from '@/data/profile';

export default function CvScreen() {
  const { width } = useWindowDimensions();
  const compact = width < 760;

  return (
    <>
      <Stack.Screen options={{ title: 'Miguel Cruz | CV' }} />
      <Head>
        <title>Miguel Cruz | CV</title>
        <meta
          name="description"
          content="CV de Miguel Cruz com formação, experiência, projetos, competências técnicas e competências linguísticas."
        />
      </Head>
      <Page>
      <View style={cvStyles.hero}>
        <View style={cvStyles.heroCopy}>
          <Text style={cvStyles.kicker}>Curriculum Vitae</Text>
          <Text style={[cvStyles.title, compact && cvStyles.titleCompact]}>
            Miguel Cruz
          </Text>
          <Text style={cvStyles.lead}>{profile.summary}</Text>
          <View style={cvStyles.actionRow}>
            <ActionLink href="/" icon="arrow-left" label="Voltar à home" />
            <ExternalAction icon="github" label="GitHub" url={profile.github} />
          </View>
        </View>

        <View style={cvStyles.cvSnapshot}>
          <Snapshot label="Formação" value="UMinho" />
          <Snapshot label="Área" value="Computação" />
          <Snapshot label="Inglês" value="C2" />
          <Snapshot label="EQF" value="6" />
        </View>
      </View>

      <View style={cvStyles.section}>
        <SectionTitle eyebrow="Formação" title="Habilitações e formação." />
        <TimelineItem
          title={profile.education.title}
          subtitle={`${profile.education.school} - ${profile.education.place}`}
          period={profile.education.period}
          items={[profile.education.eqf]}
        />
      </View>

      <View style={cvStyles.section}>
        <SectionTitle eyebrow="Experiência" title="Experiência profissional." />
        <View style={cvStyles.stack}>
          {profile.experience.map((item) => (
            <TimelineItem
              items={item.bullets}
              key={item.title}
              period={item.period}
              subtitle={`${item.organization} - ${item.place}`}
              title={item.title}
            />
          ))}
        </View>
      </View>

      <View style={cvStyles.projectBand}>
        <View style={cvStyles.projectHeader}>
          <View>
            <Text style={cvStyles.kicker}>Projeto</Text>
            <Text style={cvStyles.projectTitle}>{profile.project.title}</Text>
            <Text style={cvStyles.projectSubtitle}>{profile.project.subtitle}</Text>
          </View>
          <Text style={cvStyles.projectTag}>Full-stack</Text>
        </View>
        <BulletList items={profile.project.bullets} />
      </View>

      <View style={cvStyles.section}>
        <SectionTitle eyebrow="Competências" title="Stack e línguas." />
        <View style={cvStyles.skillGrid}>
          <SkillPanel
            icon="terminal"
            title="Linguagens"
            values={profile.skills.languages}
          />
          <SkillPanel icon="tool" title="Ferramentas" values={profile.skills.tools} />
          <SkillPanel
            icon="database"
            title="Bases de Dados"
            values={profile.skills.databases}
          />
          <SkillPanel
            icon="message-square"
            title="Competências Linguísticas"
            values={profile.skills.languagesSpoken}
          />
        </View>
      </View>
      </Page>
    </>
  );
}

function Snapshot({ label, value }: { label: string; value: string }) {
  return (
    <View style={cvStyles.snapshotItem}>
      <Text style={cvStyles.snapshotValue}>{value}</Text>
      <Text style={cvStyles.snapshotLabel}>{label}</Text>
    </View>
  );
}

const cvStyles = StyleSheet.create({
  hero: {
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 28,
    justifyContent: 'space-between',
  },
  heroCopy: {
    flex: 1,
    gap: 16,
    minWidth: 280,
  },
  kicker: {
    color: colors.coral,
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontSize: 54,
    fontWeight: '900',
    lineHeight: 58,
  },
  titleCompact: {
    fontSize: 42,
    lineHeight: 46,
  },
  lead: {
    color: colors.muted,
    fontSize: 18,
    lineHeight: 29,
    maxWidth: 720,
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 4,
  },
  cvSnapshot: {
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1,
    maxWidth: 420,
    minWidth: 280,
    overflow: 'hidden',
  },
  snapshotItem: {
    backgroundColor: colors.surface,
    flexGrow: 1,
    minHeight: 112,
    minWidth: 150,
    padding: 18,
  },
  snapshotValue: {
    color: colors.green,
    fontSize: 26,
    fontWeight: '900',
  },
  snapshotLabel: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '800',
    marginTop: 7,
    textTransform: 'uppercase',
  },
  section: {
    gap: 24,
  },
  stack: {
    gap: 24,
  },
  projectBand: {
    backgroundColor: colors.surfaceStrong,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    gap: 10,
    padding: 24,
  },
  projectHeader: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  projectTitle: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '900',
    lineHeight: 34,
    marginTop: 10,
  },
  projectSubtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 25,
    marginTop: 4,
  },
  projectTag: {
    backgroundColor: colors.amber,
    borderRadius: 8,
    color: colors.ink,
    fontSize: 13,
    fontWeight: '900',
    overflow: 'hidden',
    paddingHorizontal: 11,
    paddingVertical: 8,
  },
  skillGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },
});
