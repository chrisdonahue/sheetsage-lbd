#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*128
    }
}

\new Staff { 
    {
        \clef treble
        \key c \major
        \time 4/4
        
        d''16 e''4 r16 c''16 d''8 r16 b'16 r4~ r16 | e''16 f''4~ f''16 d''16 e''16 r16 c''8 e''16 dis''16 e''16 c''16 a'16 | cis''16 c''8. dis''8 c''8 cis''16 b'16 c''16 r16 dis''8 e'16 r16~ | r16 cis''16 d'4~ d'16 r8 g16 r8 dis''16 d''16 c''8 | c'2 r16 d''16 r16 e''8. d''16 r16~ | r4 f'16 g'8 r8. f'16 g'8 r8. | c'4~ c'8. r2~ r16~ | r2. dis''16 cis''8 c''16
    }
}

>>

\version "2.18.2"