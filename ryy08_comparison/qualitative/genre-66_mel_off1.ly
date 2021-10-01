#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*160
    }
}

\new Staff { 
    {
        \clef treble
        \key c \minor
        \time 4/4
        
        bes'16 r16 c''16 r2~ r4~ r16 | c'4 c''8 r4. e''8 b'16 r16 | ees''16 c''2 r16 c'8 ees'8 r8~ | r8 a'16 bes'16 c''4~ c''16 des''16 c''4 r16 a'16 | bes'16 c''8. ees''8 c'8 r2 | c'4 ees''8 r4. f'16 r8. | ees''16 f''8 r16 f''8 ees''16 r16 f''8 ges''16 r16 d''16 r16 g'8~ | g'16 r8. b'8 r8 ees''16 r8. bes'8 c''8 | r4 ees''8 c'8. r16 c''8 r4~ | r2. e'''8 r8
    }
}

>>

\version "2.18.2"