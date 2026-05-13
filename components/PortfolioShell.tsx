import { PropsWithChildren } from 'react';
import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { usePathname, useRouter } from 'expo-router';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

import { profile, techIcons } from '@/data/profile';

type FeatherName = keyof typeof Feather.glyphMap;
type RouteHref = '/' | '/cv';

const navItems: Array<{ href: RouteHref; label: string; icon: FeatherName }> = [
  { href: '/', label: 'Início', icon: 'home' },
  { href: '/cv', label: 'CV', icon: 'file-text' },
];

export const colors = {
  background: '#101312',
  surface: '#181d1b',
  surfaceStrong: '#202723',
  surfaceSoft: '#25302b',
  text: '#f5f7f2',
  muted: '#aab4ad',
  line: 'rgba(245, 247, 242, 0.16)',
  green: '#7fd1ae',
  coral: '#f26d5b',
  amber: '#ffd166',
  ink: '#0f1412',
};

export function Page({ children }: PropsWithChildren) {
  const { width } = useWindowDimensions();
  const compact = width < 780;

  return (
    <View style={styles.root}>
      <Header compact={compact} />
      <ScrollView
        contentContainerStyle={[styles.page, compact && styles.pageCompact]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
}

function Header({ compact }: { compact: boolean }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View style={[styles.header, compact && styles.headerCompact]}>
      <View>
        <Text style={styles.brand}>{profile.name}</Text>
        <Text style={styles.brandSubline}>{profile.role}</Text>
      </View>

      <View style={styles.navGroup}>
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Pressable
              accessibilityRole="link"
              key={item.href}
              onPress={() => router.push(item.href)}
              style={({ pressed }) => [
                styles.navButton,
                active && styles.navButtonActive,
                pressed && styles.pressed,
              ]}
            >
              <Feather
                name={item.icon}
                size={16}
                color={active ? colors.ink : colors.text}
              />
              <Text style={[styles.navText, active && styles.navTextActive]}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}

        <Pressable
          accessibilityLabel="GitHub profile"
          accessibilityRole="link"
          onPress={() => Linking.openURL(profile.github)}
          style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
        >
          <Feather name="github" size={19} color={colors.text} />
        </Pressable>
      </View>
    </View>
  );
}

export function ActionLink({
  href,
  icon,
  label,
  variant = 'primary',
}: {
  href: RouteHref;
  icon: FeatherName;
  label: string;
  variant?: 'primary' | 'secondary';
}) {
  const router = useRouter();

  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => router.push(href)}
      style={({ pressed }) => [
        styles.actionButton,
        variant === 'secondary' && styles.actionButtonSecondary,
        pressed && styles.pressed,
      ]}
    >
      <Feather
        name={icon}
        size={18}
        color={variant === 'secondary' ? colors.text : colors.ink}
      />
      <Text
        style={[
          styles.actionText,
          variant === 'secondary' && styles.actionTextSecondary,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export function ExternalAction({
  icon,
  label,
  url,
}: {
  icon: FeatherName;
  label: string;
  url: string;
}) {
  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => Linking.openURL(url)}
      style={({ pressed }) => [
        styles.actionButton,
        styles.actionButtonSecondary,
        pressed && styles.pressed,
      ]}
    >
      <Feather name={icon} size={18} color={colors.text} />
      <Text style={[styles.actionText, styles.actionTextSecondary]}>{label}</Text>
    </Pressable>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <View style={styles.sectionTitle}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.sectionHeading}>{title}</Text>
      {body ? <Text style={styles.sectionBody}>{body}</Text> : null}
    </View>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <View style={styles.bulletList}>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <View style={styles.bulletDot} />
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export function TimelineItem({
  title,
  subtitle,
  period,
  items,
}: {
  title: string;
  subtitle: string;
  period?: string;
  items?: string[];
}) {
  return (
    <View style={styles.timelineItem}>
      <View style={styles.timelineMarker} />
      <View style={styles.timelineContent}>
        <View style={styles.timelineHeader}>
          <View style={styles.timelineText}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardSubtitle}>{subtitle}</Text>
          </View>
          {period ? <Text style={styles.period}>{period}</Text> : null}
        </View>
        {items ? <BulletList items={items} /> : null}
      </View>
    </View>
  );
}

export function SkillIconCloud() {
  return (
    <View style={styles.iconCloud}>
      {techIcons.map((tech) => (
        <View key={tech.name} style={styles.techBadge}>
          {tech.asset ? (
            <Image
              accessibilityLabel={tech.label}
              resizeMode="contain"
              source={{ uri: tech.asset }}
              style={styles.techImage}
            />
          ) : (
            <Text style={styles.techLetter}>{tech.name.slice(0, 1)}</Text>
          )}
          <Text style={styles.techLabel}>{tech.label}</Text>
        </View>
      ))}
    </View>
  );
}

export function SkillPanel({
  icon,
  title,
  values,
}: {
  icon: FeatherName;
  title: string;
  values: string[];
}) {
  return (
    <View style={styles.skillPanel}>
      <View style={styles.skillPanelTitle}>
        <Feather name={icon} size={18} color={colors.green} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <Text style={styles.skillValues}>{values.join(' | ')}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.background,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
    flexDirection: 'row',
    gap: 18,
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 18,
  },
  headerCompact: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    paddingHorizontal: 18,
  },
  brand: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  brandSubline: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 3,
  },
  navGroup: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  navButton: {
    alignItems: 'center',
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    minHeight: 40,
    paddingHorizontal: 12,
  },
  navButtonActive: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
  navText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  navTextActive: {
    color: colors.ink,
  },
  iconButton: {
    alignItems: 'center',
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  pressed: {
    opacity: 0.72,
  },
  page: {
    alignSelf: 'center',
    gap: 56,
    maxWidth: 1180,
    paddingHorizontal: 32,
    paddingVertical: 58,
    width: '100%',
  },
  pageCompact: {
    gap: 40,
    paddingHorizontal: 18,
    paddingVertical: 38,
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: colors.green,
    borderColor: colors.green,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 9,
    minHeight: 46,
    minWidth: 118,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  actionButtonSecondary: {
    backgroundColor: 'transparent',
    borderColor: colors.line,
  },
  actionText: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: '800',
  },
  actionTextSecondary: {
    color: colors.text,
  },
  sectionTitle: {
    gap: 10,
    maxWidth: 760,
  },
  eyebrow: {
    color: colors.coral,
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  sectionHeading: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 39,
  },
  sectionBody: {
    color: colors.muted,
    fontSize: 17,
    lineHeight: 27,
  },
  bulletList: {
    gap: 9,
    marginTop: 18,
  },
  bulletRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 10,
  },
  bulletDot: {
    backgroundColor: colors.green,
    borderRadius: 3,
    height: 6,
    marginTop: 8,
    width: 6,
  },
  bulletText: {
    color: colors.muted,
    flex: 1,
    fontSize: 15,
    lineHeight: 23,
  },
  timelineItem: {
    flexDirection: 'row',
    gap: 18,
  },
  timelineMarker: {
    backgroundColor: colors.coral,
    borderRadius: 8,
    height: 16,
    marginTop: 5,
    width: 16,
  },
  timelineContent: {
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
    flex: 1,
    paddingBottom: 28,
  },
  timelineHeader: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  timelineText: {
    flex: 1,
    minWidth: 240,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 24,
  },
  cardSubtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 23,
    marginTop: 4,
  },
  period: {
    backgroundColor: colors.surfaceSoft,
    borderRadius: 8,
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  iconCloud: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  techBadge: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    minHeight: 96,
    padding: 12,
    width: 92,
  },
  techImage: {
    height: 34,
    width: 34,
  },
  techLetter: {
    color: colors.amber,
    fontSize: 32,
    fontWeight: '900',
    height: 34,
    lineHeight: 34,
  },
  techLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  skillPanel: {
    backgroundColor: colors.surface,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexBasis: 250,
    flexGrow: 1,
    gap: 12,
    minWidth: 240,
    padding: 18,
  },
  skillPanelTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  skillValues: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 23,
  },
});
